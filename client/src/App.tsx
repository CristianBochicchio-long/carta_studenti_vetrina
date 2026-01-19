import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import AcquistaPage from "./pages/AcquistaPage";
import ContattiPage from "./pages/ContattiPage";
import PrivacyPage from "./pages/PrivacyPage";
import AbbigliamentoPage from "./pages/AbbigliamentoPage";
import CiboPage from "./pages/CiboPage";
import SalutePage from "./pages/SalutePage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/acquista"} component={AcquistaPage} />
      <Route path={"/contatti"} component={ContattiPage} />
      <Route path={"/privacy"} component={PrivacyPage} />
      <Route path={"/abbigliamento"} component={AbbigliamentoPage} />
      <Route path={"/cibo"} component={CiboPage} />
      <Route path={"/salute"} component={SalutePage} />
      <Route path={"/:category"} component={CategoryPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
