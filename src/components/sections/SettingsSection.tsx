import { Settings, Moon, Sun, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface Props {
  settings: {
    theme: "dark" | "light";
    priceUnit: string;
    cookingPreference: string;
    region: string;
  };
  onUpdateSettings: (updates: Partial<Props["settings"]>) => void;
}

export function SettingsSection({ settings, onUpdateSettings }: Props) {
  const toggleTheme = () => {
    const newTheme = settings.theme === "dark" ? "light" : "dark";
    onUpdateSettings({ theme: newTheme });
    // DOM class toggle is handled by the useEffect in Index.tsx
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center gap-2">
        <Settings className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Configurações</h2>
      </div>

      <Card>
        <CardContent className="p-5 space-y-6">
          {/* Theme */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {settings.theme === "dark" ? <Moon className="h-4 w-4 text-primary" /> : <Sun className="h-4 w-4 text-primary" />}
              <div>
                <Label>Tema</Label>
                <p className="text-xs text-muted-foreground">
                  {settings.theme === "dark" ? "Modo escuro ativado" : "Modo claro ativado"}
                </p>
              </div>
            </div>
            <Switch checked={settings.theme === "dark"} onCheckedChange={toggleTheme} />
          </div>

          {/* Price unit */}
          <div className="space-y-2">
            <Label>Unidade de preço</Label>
            <Select value={settings.priceUnit} onValueChange={(v) => onUpdateSettings({ priceUnit: v })}>
              <SelectTrigger className="bg-card">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="R$/kg">R$/kg</SelectItem>
                <SelectItem value="R$/lb">R$/lb</SelectItem>
                <SelectItem value="USD/kg">USD/kg</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Cooking preference */}
          <div className="space-y-2">
            <Label>Método de preparo preferido</Label>
            <Select value={settings.cookingPreference} onValueChange={(v) => onUpdateSettings({ cookingPreference: v })}>
              <SelectTrigger className="bg-card">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Churrasqueira">Churrasqueira</SelectItem>
                <SelectItem value="Grelha">Grelha</SelectItem>
                <SelectItem value="Forno">Forno</SelectItem>
                <SelectItem value="Frigideira">Frigideira</SelectItem>
                <SelectItem value="Panela de pressão">Panela de pressão</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Region */}
          <div className="space-y-2">
            <Label>Região</Label>
            <Select value={settings.region} onValueChange={(v) => onUpdateSettings({ region: v })}>
              <SelectTrigger className="bg-card">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Brasil">Brasil</SelectItem>
                <SelectItem value="São Paulo">São Paulo</SelectItem>
                <SelectItem value="Rio de Janeiro">Rio de Janeiro</SelectItem>
                <SelectItem value="Minas Gerais">Minas Gerais</SelectItem>
                <SelectItem value="Rio Grande do Sul">Rio Grande do Sul</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-5">
          <LogoutButton />
        </CardContent>
      </Card>
    </div>
  );
}

function LogoutButton() {
  const { user, signOut } = useAuth();
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-foreground">Conta</p>
        <p className="text-xs text-muted-foreground">{user?.email}</p>
      </div>
      <button
        onClick={signOut}
        className="flex items-center gap-2 text-sm text-destructive hover:underline"
      >
        <LogOut className="h-4 w-4" />
        Sair
      </button>
    </div>
  );
}
