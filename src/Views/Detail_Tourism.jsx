import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeftLong,
  faArrowRight,
  faCheck,
  faCircleInfo,
  faCode,
  faCompass,
  faGlobeAsia,
  faLocationDot,
  faMapLocationDot,
  faMobileScreen,
  faMountainSun,
  faRoute,
  faUmbrellaBeach,
} from '@fortawesome/free-solid-svg-icons'

const stack = [
  'HTML',
  'Tailwind CSS',
  'Bootstrap',
]

const features = [
  [
    faMapLocationDot,
    'Destination Discovery',
    'Users can explore different destinations in Cambodia through attractive destination cards and organized sections.',
  ],
  [
    faCompass,
    'Travel Exploration',
    'The website presents interesting places and helps visitors discover different travel experiences across Cambodia.',
  ],
  [
    faMobileScreen,
    'Responsive Design',
    'The layout is designed to work smoothly across desktop, tablet, and mobile screen sizes.',
  ],
  [
    faRoute,
    'Simple Navigation',
    'Clear navigation makes it easier for visitors to move between destinations and different sections of the website.',
  ],
  [
    faMountainSun,
    'Nature & Culture',
    'The interface can present Cambodia’s cultural heritage, natural attractions, temples, mountains, and other destinations.',
  ],
  [
    faUmbrellaBeach,
    'Travel Categories',
    'Destinations can be organized into categories such as cultural tourism, nature, beaches, and city experiences.',
  ],
]

const destinations = [
  {
    title: 'Siem Reap',
    description:
      'A major destination for exploring Angkor and Cambodia’s cultural heritage.',
    icon: faGlobeAsia,
  },
  {
    title: 'Phnom Penh',
    description:
      'Cambodia’s capital with cultural attractions, city experiences, and historical sites.',
    icon: faLocationDot,
  },
  {
    title: 'Kampot & Kep',
    description:
      'Coastal destinations offering relaxed travel experiences, nature, and local attractions.',
    icon: faUmbrellaBeach,
  },
]

const DetailTourismCambodia = ({ onNavigate }) => {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f8f6]">

      {/* ================= HERO ================= */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">

          {/* Back */}
          <button
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#0f8b6f] transition hover:gap-3"
            onClick={() => onNavigate('projects')}
            type="button"
          >
            <FontAwesomeIcon icon={faArrowLeftLong} />
            Back to Projects
          </button>

          {/* Project Label */}
          <div className="flex items-center gap-3">

            <span className="grid size-11 place-items-center rounded-full bg-[#eef3ef] text-[#0f8b6f]">
              <FontAwesomeIcon icon={faGlobeAsia} />
            </span>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
                Travel Website
              </p>

              <p className="mt-1 text-sm text-[#7a8580]">
                Project 03
              </p>
            </div>

          </div>

          {/* Title */}
          <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-tight text-[#17211d] sm:text-5xl lg:text-6xl">
            Tourism In Cambodia
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f6d68] sm:text-lg">
            A tourism website designed to introduce visitors to
            Cambodia’s destinations, culture, nature, and travel
            experiences through a clean and responsive interface.
          </p>

          {/* Technologies */}
          <div className="mt-8 flex flex-wrap gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/10 bg-[#f7f8f6] px-4 py-2 text-sm font-bold text-[#40504a]"
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">

          {/* Overview */}
          <article className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm sm:p-9">

            <div className="flex items-center gap-3">

              <span className="grid size-10 place-items-center rounded-full bg-[#eef3ef] text-[#0f8b6f]">
                <FontAwesomeIcon icon={faCircleInfo} />
              </span>

              <h2 className="text-2xl font-bold text-[#17211d]">
                Project Overview
              </h2>

            </div>

            <p className="mt-6 leading-8 text-[#5f6d68]">
              Tourism In Cambodia is a frontend tourism website
              created to present Cambodia as an attractive destination
              for travelers. The website focuses on presenting
              destinations, travel information, cultural experiences,
              and natural attractions in a simple visual format.
            </p>

            <p className="mt-4 leading-8 text-[#5f6d68]">
              The project uses destination cards, responsive sections,
              clear navigation, and modern layouts to make it easier
              for visitors to discover places they may want to explore.
              Cambodia’s official tourism information highlights
              destinations across the country, including Siem Reap,
              Phnom Penh, Kampot, Kep, and many other provinces.
            </p>

          </article>

          {/* Project Information */}
          <aside className="rounded-2xl border border-black/10 bg-[#17211d] p-7 text-white shadow-sm">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#72d7bd]">
              Project Information
            </p>

            <div className="mt-7 space-y-6">

              <div>
                <p className="text-sm text-white/50">
                  Project Type
                </p>

                <p className="mt-1 font-bold">
                  Travel Website
                </p>
              </div>

              <div>
                <p className="text-sm text-white/50">
                  Main Purpose
                </p>

                <p className="mt-1 font-bold">
                  Destination Discovery
                </p>
              </div>

              <div>
                <p className="text-sm text-white/50">
                  Frontend
                </p>

                <p className="mt-1 font-bold">
                  HTML + CSS
                </p>
              </div>

              <div>
                <p className="text-sm text-white/50">
                  Styling
                </p>

                <p className="mt-1 font-bold">
                  Tailwind CSS + Bootstrap
                </p>
              </div>

            </div>

          </aside>

        </div>
      </section>

      {/* ================= GOALS ================= */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
            Project Goals
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-[#17211d]">
            Making it easier to discover the beauty of Cambodia.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            {[
              'Present Cambodian destinations in an attractive way.',
              'Make travel information easier to explore.',
              'Create a responsive and user-friendly tourism interface.',
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-black/10 bg-[#f7f8f6] p-6"
              >

                <span className="text-sm font-bold text-[#0f8b6f]">
                  0{index + 1}
                </span>

                <p className="mt-4 font-semibold leading-7 text-[#17211d]">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= DESTINATIONS ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
            Featured Destinations
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#17211d]">
            Explore Cambodia
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[#5f6d68]">
            The website can organize destinations into clear sections
            so visitors can quickly discover different parts of Cambodia.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {destinations.map((destination, index) => (
            <article
              key={destination.title}
              className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >

              <div className="flex items-center justify-between">

                <span className="grid size-12 place-items-center rounded-full bg-[#eef3ef] text-[#0f8b6f] transition group-hover:bg-[#0f8b6f] group-hover:text-white">
                  <FontAwesomeIcon icon={destination.icon} />
                </span>

                <span className="text-sm font-bold text-[#0f8b6f]">
                  0{index + 1}
                </span>

              </div>

              <h3 className="mt-6 text-xl font-bold text-[#17211d]">
                {destination.title}
              </h3>

              <p className="mt-3 leading-7 text-[#5f6d68]">
                {destination.description}
              </p>

            </article>
          ))}

        </div>

      </section>

      {/* ================= FEATURES ================= */}
      <section className="border-y border-black/10 bg-[#eef3ef]">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
              Core Features
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#17211d]">
              What the website can offer
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-[#5f6d68]">
              The project focuses on presenting destinations clearly
              while providing a responsive and enjoyable browsing experience.
            </p>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {features.map(([icon, title, text], index) => (
              <article
                key={title}
                className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >

                <div className="flex gap-5">

                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#eef3ef] text-[#0f8b6f] transition group-hover:bg-[#0f8b6f] group-hover:text-white">
                    <FontAwesomeIcon icon={icon} />
                  </span>

                  <div>

                    <p className="text-xs font-bold text-[#0f8b6f]">
                      0{index + 1}
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-[#17211d]">
                      {title}
                    </h3>

                    <p className="mt-2 leading-7 text-[#5f6d68]">
                      {text}
                    </p>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* ================= TRAVEL EXPERIENCE ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
          Travel Experience
        </p>

        <h2 className="mt-3 text-3xl font-bold text-[#17211d]">
          Different ways to experience Cambodia
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-4">

          {[
            [
              '01',
              'Culture',
              'Discover Cambodia’s temples, heritage, traditions, and historical places.',
            ],
            [
              '02',
              'Nature',
              'Explore mountains, forests, waterfalls, lakes, and other natural attractions.',
            ],
            [
              '03',
              'Coastal',
              'Discover beaches, islands, and relaxing destinations around Cambodia’s coast.',
            ],
            [
              '04',
              'City',
              'Explore city attractions, local food, markets, and urban experiences.',
            ],
          ].map(([number, title, text]) => (
            <article
              key={number}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >

              <span className="text-sm font-bold text-[#0f8b6f]">
                {number}
              </span>

              <h3 className="mt-3 text-lg font-bold text-[#17211d]">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#5f6d68]">
                {text}
              </p>

            </article>
          ))}

        </div>

      </section>

      {/* ================= TECHNOLOGY ================= */}
      <section className="bg-[#17211d] text-white">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

          <div className="grid gap-10 lg:grid-cols-2">

            <div>

              <div className="flex items-center gap-3">

                <span className="grid size-11 place-items-center rounded-full bg-white/10 text-[#72d7bd]">
                  <FontAwesomeIcon icon={faCode} />
                </span>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#72d7bd]">
                  Technology Stack
                </p>

              </div>

              <h2 className="mt-5 text-3xl font-bold">
                Technologies used in this project
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-white/60">
                The website combines HTML with Tailwind CSS and
                Bootstrap to create a responsive tourism interface
                with reusable visual sections and clean layouts.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-3 py-12 sm:grid-cols-3">

              {stack.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-4"
                >

                  <FontAwesomeIcon
                    className="text-[#72d7bd]"
                    icon={faCheck}
                  />

                  <span className="text-sm font-semibold">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHAT I LEARNED ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm sm:p-10">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
            What I Learned
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#17211d]">
            Experience gained from this project
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {[
              'Creating a tourism website with a clear visual hierarchy.',
              'Designing destination cards and responsive content sections.',
              'Using Tailwind CSS for custom responsive layouts.',
              'Combining Tailwind CSS and Bootstrap effectively.',
              'Organizing tourism content into categories.',
              'Improving responsive design for different screen sizes.',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >

                <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[#eef3ef] text-xs text-[#0f8b6f]">
                  <FontAwesomeIcon icon={faCheck} />
                </span>

                <p className="leading-7 text-[#5f6d68]">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="border-t border-black/10 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">

          <div className="flex flex-col gap-6 rounded-2xl bg-[#eef3ef] p-7 sm:p-10 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
                More Projects
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#17211d]">
                Want to see more of my work?
              </h2>

            </div>

            <button
              onClick={() => onNavigate('projects')}
              type="button"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#17211d] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0f8b6f]"
            >
              View All Projects

              <FontAwesomeIcon icon={faArrowRight} />
            </button>

          </div>

        </div>

      </section>

    </main>
  )
}

export default DetailTourismCambodia