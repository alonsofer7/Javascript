import Navbar from "./components/Navbar";
import Clicky from "./components/Clicky";
import CountDown from "./components/CountDown";
import CountDown2 from "./components/CountDown2";

const App = () => {

    let exampleProp = "example navbar prop";

    return (
        <>
            <Navbar example={exampleProp} />
            <h1>Hello from App</h1>
            <Clicky />
            <br />
            <CountDown startValue="10" />
            <CountDown startValue="20" />
            <CountDown startValue="5"/>

            <CountDown2 startValue="10"/>
        </>
    );
};

export default App;