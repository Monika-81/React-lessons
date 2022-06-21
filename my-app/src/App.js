import logo from './logo.svg';
import './App.css';
import NestingComponents from './components/NestingComponents';
// import ConditionalRenderingClass from './components/ConditionalRenderingClass';
// import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
// import EventBinding from './components/EventBinding';
// import EventsClass from './components/EventsClass';
// import EventsFunctional from './components/EventsFunctional';
// import FunctionalGreeting from './components/FunctionalGreetings';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="John" age="32" />
      <StatefulGreeting greeting="I'm a stateful component" name="Tim"/>
      <StatefulGreetingWithCallback />
      <StatefulGreetingWithPrevState />
      <EventsClass />
      <EventsFunctional />
      <EventBinding />
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true} /> */}
      <NestingComponents />
    </div>
  );
}

export default App;
