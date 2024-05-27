export default function TaskLayout({ children }) {
  return (
    <section className="" id="tasks">
      <div className="w-full">
        <div className="rounded-xl border ">{children}</div>
      </div>
    </section>
  );
}
