import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Start from "./pages/Start";
import LoginR from "./pages/re-educating/LoginR";
import HomeR from "./pages/re-educating/HomeR";
import ActivityR from "./pages/re-educating/ActivityR";
import DetailAct from "./pages/re-educating/DetailAct";
import HistoryR from "./pages/re-educating/HistoryR";
import LoginI from "./pages/institution/LoginI"
import HomeI from "./pages/institution/HomeI";
import SectionI from "./pages/institution/SectionI";
import CactivityI from "./pages/institution/CactivityI";
import Reports from "./pages/institution/Reports";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/start">
          <Start />
        </Route>
        <Route exact path="/">
          <Redirect to="/start"/>
        </Route>
        <Route exact path="/loginR">
          <LoginR />
        </Route>
        <Route exact path="/homeR">
          <HomeR/>
        </Route>
        <Route exact path="/activityR">
        <ActivityR />
        </Route>
        <Route exact path="/detailAct">
        <DetailAct />
        </Route>
        <Route exact path="/historyR">
        <HistoryR />
        </Route>
        <Route exact path="/loginI">
        <LoginI/>
        </Route>
        <Route exact path="/homeI">
        <HomeI/>
        </Route>
        <Route exact path="/sectionI">
        <SectionI/>
        </Route>
        <Route exact path="/cActivityI">
        <CactivityI/>
        </Route>
        <Route exact path="/reportsI">
        <Reports/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
