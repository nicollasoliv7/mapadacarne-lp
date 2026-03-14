import {
  Home, MessageSquare, Map, DollarSign, ScanLine, BookOpen, Library, Heart, Settings,
} from "lucide-react";
import { type Section } from "@/hooks/useAppState";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems: { title: string; section: Section; icon: React.ElementType }[] = [
  { title: "Home", section: "home", icon: Home },
  { title: "Assistente IA", section: "assistant", icon: MessageSquare },
  { title: "Mapa de Cortes", section: "cuts-map", icon: Map },
  { title: "Detector de Preço", section: "price-detector", icon: DollarSign },
  { title: "Scanner de Carne", section: "meat-scanner", icon: ScanLine },
];

const resourceItems: { title: string; section: Section; icon: React.ElementType }[] = [
  { title: "Guias de Preparo", section: "cooking-guides", icon: BookOpen },
  { title: "Biblioteca de Carnes", section: "knowledge", icon: Library },
  { title: "Favoritos", section: "favorites", icon: Heart },
  { title: "Configurações", section: "settings", icon: Settings },
];

interface Props {
  currentSection: Section;
  onNavigate: (section: Section) => void;
}

export function AppSidebar({ currentSection, onNavigate }: Props) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🥩</span>
          {!collapsed && (
            <div>
              <h1 className="text-sm font-semibold text-foreground">Mapa da Carne</h1>
              <p className="text-xs text-muted-foreground">Inteligente</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.section}>
                  <SidebarMenuButton
                    onClick={() => onNavigate(item.section)}
                    className={currentSection === item.section ? "bg-accent text-accent-foreground" : ""}
                  >
                    <item.icon className="h-4 w-4" />
                    {!collapsed && <span>{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Recursos</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {resourceItems.map((item) => (
                <SidebarMenuItem key={item.section}>
                  <SidebarMenuButton
                    onClick={() => onNavigate(item.section)}
                    className={currentSection === item.section ? "bg-accent text-accent-foreground" : ""}
                  >
                    <item.icon className="h-4 w-4" />
                    {!collapsed && <span>{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3">
        {!collapsed && (
          <p className="text-xs text-muted-foreground text-center">
            v1.0 — Nunca mais desperdice dinheiro com carne ruim
          </p>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
