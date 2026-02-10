import BasicForm from "./components/BasicForm";
import FormWithShadcn from "./components/FormWithShadcn";
import MultiStepForm from "./components/MultiStepForm";
import ValidatedForm from "./components/ValidatedForm";
import FileUploadForm from "./components/FileUploadForm";

function App() {
  return (
    <div className="p-8 space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Form</h2>
        <BasicForm />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Form with Shadcn</h2>
        <FormWithShadcn />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Multi-Step Form</h2>
        <MultiStepForm />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Validated Form</h2>
        <ValidatedForm />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">File Upload Form</h2>
        <FileUploadForm />
      </section>
    </div>
  )
}  
export default App 