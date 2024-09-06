const user = {
  name: "Jessica Randall",
  location: "London, United Kingdom",
  role: "Front-end developer and avid reader.",
  avatar: "/avatar-jessica.jpeg",
  links: [
    { title: "GitHub", url: "#" },
    { title: "Frontend Mentor", url: "#" },
    { title: "LinkedIn", url: "#" },
    { title: "Twitter", url: "#" },
    { title: "Instagram", url: "#" },
  ],
};

export default function Page() {
  return (
    <div>
      <header className="sr-only">
        <h1>Social Links Profile Component</h1>
      </header>
      <main className="flex min-h-screen items-center justify-center px-6 py-10 sm:p-0">
        <article className="max-w-card bg-dark-gray w-full space-y-6 rounded-xl p-6 text-center sm:p-10">
          <picture>
            <img
              src={user.avatar}
              alt={user.name}
              fetchPriority="high"
              loading="eager"
              className="mx-auto size-22 rounded-full"
            />
          </picture>
          <div className="space-y-1">
            <h2 className="text-2xl font-bold leading-9 text-white">
              {user.name}
            </h2>
            <p className="text-neon-green text-sm font-bold leading-[1.3125rem]">
              {user.location}
            </p>
          </div>
          <p className="text-sm leading-[1.3125rem] text-white">
            "{user.role}"
          </p>
          <nav>
            <ul className="space-y-4">
              {user.links.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.url}
                    className="bg-gray hover:text-gray hover:bg-neon-green block rounded-lg p-3 text-sm font-bold leading-[1.3125rem] text-white transition-colors duration-200"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </article>
      </main>
      <footer className="sr-only">
        <p>Challenge by Frontend Mentor</p>
        <p>
          This website is built with Tailwind CSS and NextJS. Made with love by
          Arda Eker.
        </p>
      </footer>
    </div>
  );
}
