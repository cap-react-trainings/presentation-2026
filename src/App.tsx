import ExampleChapter from "./chapters/99_example/ExampleChapter";
import RevealWrapper from "./components/reveal/RevealWrapper";
import Slide from "./components/reveal/Slide";

const App: React.FC = () => {
    return (
        <RevealWrapper>
            <ExampleChapter />
        </RevealWrapper>
    );
};

export default App;
