import Link from "@/components/mobel/MobelLink";

export default function NotFound() {
  return (
    <>
      {/* 404 */}
      <section className="not-found">
        <div className="container">
          <h1 className="title" data-title="Page not found!">404</h1>
          <div className="h4 subtitle">Sorry! Page not found.</div>
          <p>The requested URL was not found on this server. That's all we know.</p>
          <p>Click <Link href="/">here</Link> to get to the front page? </p>
        </div>
      </section>
    </>
  );
}
