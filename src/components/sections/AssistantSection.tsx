import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { meatCuts, getPriceCategoryLabel } from "@/data/meatData";
import { toast } from "sonner";

interface Message {
  role: "user" | "assistant" | "error";
  content: string;
}

const MAX_INPUT_LENGTH = 500;

const suggestions = [
  "Qual carne devo comprar hoje?",
  "Qual carne é a mais macia?",
  "Qual carne é boa e barata?",
  "O que substitui a picanha?",
  "Melhor carne para churrasco?",
];

function formatCutResponse(c: typeof meatCuts[0]): string {
  try {
    const desc = c.description?.split(".")?.[0] ?? "Corte versátil";
    const method = c.cookingMethods?.[0] ?? "Grelhar";
    return `**${c.name}**\n- Maciez: ${c.tenderness}/10\n- Sabor: ${c.flavor}/10\n- Custo-benefício: ${c.costBenefit}/10\n- Preço: ${getPriceCategoryLabel(c.priceCategory)}\n- Preparo: ${method}\n- ${desc}.`;
  } catch {
    return `**${c.name}** — Informações parcialmente disponíveis.`;
  }
}

function generateResponse(question: string): string {
  try {
    if (!question?.trim()) return "Por favor, digite uma pergunta sobre carnes.";
    if (meatCuts.length === 0) return "Base de dados indisponível no momento. Tente novamente mais tarde.";

    const q = question.toLowerCase();

    if (q.includes("macia") || q.includes("tender")) {
      const soft = meatCuts.filter((c) => c.tenderness >= 7).sort((a, b) => b.tenderness - a.tenderness);
      if (soft.length === 0) return "Não encontrei cortes com alta maciez na base atual.";
      return `Cortes mais macios:\n\n` + soft.map(formatCutResponse).join("\n\n");
    }

    if (q.includes("barat") || q.includes("econôm") || q.includes("cheap")) {
      const cheap = meatCuts.filter((c) => ["budget", "affordable"].includes(c.priceCategory));
      if (cheap.length === 0) return "Não encontrei opções econômicas na base atual.";
      return `Melhores opções econômicas:\n\n` + cheap.map(formatCutResponse).join("\n\n");
    }

    if (q.includes("substitui") || q.includes("alterna") || q.includes("replace")) {
      const target = meatCuts.find((c) => q.includes(c.name.toLowerCase()));
      if (target && target.smartSubstitutions?.length > 0) {
        const alts = target.smartSubstitutions
          .map((s) => {
            const cut = meatCuts.find((c) => c.id === s.id);
            return cut ? `${formatCutResponse(cut)}\n- _${s.reason}_` : null;
          })
          .filter(Boolean);
        if (alts.length > 0) {
          return `Substituições inteligentes para **${target.name}**:\n\n` + alts.join("\n\n");
        }
      }
      return "Não encontrei substituições para esse corte. Tente mencionar o nome exato (ex: picanha, fraldinha).";
    }

    if (q.includes("churrasco") || q.includes("barbecue") || q.includes("grelha")) {
      const bbq = meatCuts
        .filter((c) => c.cookingMethods?.some((m) => m.toLowerCase().includes("churrasco") || m.toLowerCase().includes("grelha")))
        .sort((a, b) => b.flavor - a.flavor);
      if (bbq.length === 0) return "Nenhum corte para churrasco encontrado.";
      return `Melhores carnes para churrasco:\n\n` + bbq.slice(0, 5).map(formatCutResponse).join("\n\n");
    }

    if (q.includes("comprar") || q.includes("hoje") || q.includes("buy")) {
      const rec = [...meatCuts].sort((a, b) => b.costBenefit - a.costBenefit).slice(0, 4);
      return `Recomendações de hoje (melhor custo-benefício):\n\n` + rec.map(formatCutResponse).join("\n\n");
    }

    const random = meatCuts[Math.floor(Math.random() * meatCuts.length)];
    return `Boa pergunta! Aqui vai uma sugestão:\n\n${formatCutResponse(random)}\n\nDigite outra pergunta para saber mais!`;
  } catch {
    return "Desculpe, ocorreu um erro ao processar sua pergunta. Tente reformulá-la.";
  }
}

export function AssistantSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) {
      toast.error("Digite uma pergunta antes de enviar.");
      return;
    }
    if (trimmed.length > MAX_INPUT_LENGTH) {
      toast.error(`A mensagem deve ter no máximo ${MAX_INPUT_LENGTH} caracteres.`);
      return;
    }

    const userMsg: Message = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      try {
        const response = generateResponse(trimmed);
        setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      } catch {
        setMessages((prev) => [...prev, { role: "error", content: "Desculpe, não consegui processar sua pergunta. Tente novamente." }]);
        toast.error("Erro ao gerar resposta.");
      } finally {
        setIsTyping(false);
      }
    }, 800 + Math.random() * 700);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.length <= MAX_INPUT_LENGTH) {
      setInput(val);
    }
  };

  return (
    <div className="flex flex-col max-w-3xl mx-auto animate-fade-in" style={{ height: "calc(100vh - 8rem)" }}>
      <div className="flex items-center gap-2 mb-4">
        <Bot className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Assistente IA de Carnes</h2>
      </div>

      {messages.length === 0 && (
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <div className="text-center space-y-2">
            <Sparkles className="h-10 w-10 text-primary mx-auto" />
            <h3 className="text-lg font-medium text-foreground">Como posso ajudar?</h3>
            <p className="text-sm text-muted-foreground">Pergunte sobre cortes, preços, preparo...</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center max-w-md">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-xs px-3 py-2 rounded-full bg-card border border-border hover:border-primary/50 text-foreground transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {messages.length > 0 && (
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
              {(msg.role === "assistant" || msg.role === "error") && (
                <div className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 ${msg.role === "error" ? "bg-destructive/10" : "bg-primary/10"}`}>
                  {msg.role === "error" ? (
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                  ) : (
                    <Bot className="h-4 w-4 text-primary" />
                  )}
                </div>
              )}
              <Card className={`max-w-[80%] ${msg.role === "user" ? "bg-primary text-primary-foreground" : msg.role === "error" ? "bg-destructive/5 border-destructive/30" : "bg-card"}`}>
                <CardContent className="p-3 text-sm whitespace-pre-wrap">
                  {msg.content.split(/(\*\*.*?\*\*)|(_.*?_)/g).map((part, j) => {
                    if (!part) return null;
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return <strong key={j}>{part.slice(2, -2)}</strong>;
                    }
                    if (part.startsWith("_") && part.endsWith("_")) {
                      return <em key={j} className="text-muted-foreground">{part.slice(1, -1)}</em>;
                    }
                    return <span key={j}>{part}</span>;
                  })}
                </CardContent>
              </Card>
              {msg.role === "user" && (
                <div className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <User className="h-4 w-4 text-secondary-foreground" />
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-3">
              <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <Card className="bg-card">
                <CardContent className="p-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse" />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse [animation-delay:0.4s]" />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          <div ref={endRef} />
        </div>
      )}

      <div className="space-y-1">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === "Enter" && !isTyping && send(input)}
            placeholder="Pergunte sobre carnes..."
            className="bg-card"
            disabled={isTyping}
            maxLength={MAX_INPUT_LENGTH}
          />
          <Button onClick={() => send(input)} size="icon" disabled={!input.trim() || isTyping}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
        {input.length > MAX_INPUT_LENGTH * 0.8 && (
          <p className="text-xs text-muted-foreground text-right">{input.length}/{MAX_INPUT_LENGTH}</p>
        )}
      </div>
    </div>
  );
}
