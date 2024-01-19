import Section from '../components/section';


export default function Home() {
  return (
    <>
      <header className="h-56 bg-banner bg-cover bg-no-repeat" />
      <main className="flex flex-col items-center justify-center bg-backgroundMain">
        <Section />
      </main>
    </>
  );
}
