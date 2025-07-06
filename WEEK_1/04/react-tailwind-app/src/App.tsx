import {
  ButtonClickCounter,
  InputFieldTracker,
  ToggleSwitch,
  HoverHighlight,
  FormSubmissionAlert,
  KeyPressDisplay,
  DoubleClickMessage,
  DropdownSelection,
  CheckboxToggle,
  SearchFilter,
} from "./components/EventHandlingExercises";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Event Handling Practice Exercises */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Event Handling Practice Exercises
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ButtonClickCounter />
            <InputFieldTracker />
            <ToggleSwitch />
            <HoverHighlight />
            <FormSubmissionAlert />
            <KeyPressDisplay />
            <DoubleClickMessage />
            <DropdownSelection />
            <CheckboxToggle />
            <SearchFilter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
