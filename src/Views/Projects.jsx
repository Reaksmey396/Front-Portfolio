import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClockRotateLeft,
  faCreditCard,
  faDiagramProject,
  faFileInvoiceDollar,
  faGraduationCap,
  faMapLocationDot,
  faReceipt,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons'

const projects = [
  {
    title: 'Payment School Fee System',
    page: 'detailPaySchoolFee',
    type: 'Web System',
    icon: faCreditCard,
    stack: ['HTML', 'Tailwind CSS', 'Bootstrap', 'PHP'],
    text: 'A school fee payment website with frontend screens and backend practice for managing payment information for students, parents, and administrators.',
    status: 'School project',
    roles: ['Admin', 'Student', 'Parent / Other'],
    details: [
      [faFileInvoiceDollar, 'Bakong payment', 'Supports school fee payment through Bakong.'],
      [faReceipt, 'Receipt display', 'Shows payment receipt after a successful payment.'],
      [faClockRotateLeft, 'Payment history', 'Keeps payment history inside the website.'],
      [faShieldHalved, 'Role access', 'Built for Admin, Student, and Parent or other users.'],
    ],
  },
  {
    title: 'Online Course',
    page: 'detailOnlineCourse',
    type: 'Education Platform',
    icon: faGraduationCap,
    stack: ['React.js', 'Tailwind CSS', 'JavaScript'],
    text: 'An online learning website concept with course browsing, clean content sections, responsive layouts, and student-friendly interface design.',
    status: 'Learning platform',
  },
  {
    title: 'Tourism In Cambodia',
    page: 'detailTourism',
    type: 'Travel Website',
    icon: faMapLocationDot,
    stack: ['HTML', 'Tailwind CSS', 'Bootstrap'],
    text: 'A tourism website that presents places in Cambodia with attractive sections, destination cards, simple navigation, and responsive design.',
    status: 'Tourism project',
  },
  {
    title: 'Inventory Management',
    page: 'detailIMS',
    type: 'Business Application',
    icon: faReceipt,
    stack: ['Vue.js', 'Tailwind CSS', 'JavaScript', 'Laravel'],
    text: 'An inventory management project for practicing frontend interfaces, database-connected features, and backend fundamentals such as products and stock records.',
    status: 'Business project',
  },
  {
    title: 'Shoe Shop E-commerce',
    page: 'detailShoeShop',
    type: 'Business Application',
    icon: faReceipt,
    stack: ['React.js', 'Tailwind CSS', 'JavaScript', 'Firebase'],
    text: 'An e-commerce platform for selling shoes online with a user-friendly interface and seamless shopping experience.',
    status: 'Business project',
  },
]

const Projects = ({ onNavigate }) => {
  return (
    <main className="min-h-[calc(100vh-4rem)]">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-[#0f8b6f]">
              <FontAwesomeIcon icon={faDiagramProject} />
              Projects
            </p>
            <h1 className="mt-3 text-5xl font-bold leading-tight text-[#17211d]">
              Work I can build, improve, and explain.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#5f6d68]">
              These projects show my frontend strengths and my growing backend practice through
              school systems, education platforms, business applications, and responsive websites.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="rounded-full bg-[#eef3ef] px-3 py-1 text-sm font-bold text-[#0f8b6f]">
                  {project.type}
                </p>
                <span className="grid size-11 place-items-center rounded-full bg-[#eef3ef] text-[#0f8b6f]">
                  <FontAwesomeIcon icon={project.icon} />
                </span>
              </div>
              <p className="mt-5 text-sm font-bold text-[#0f8b6f]">0{index + 1}</p>
              <h2 className="mt-2 text-2xl font-bold text-[#17211d]">{project.title}</h2>
              <p className="mt-4 leading-8 text-[#5f6d68]">{project.text}</p>
              <div className="mt-6 border-t border-black/10 pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-[#eef3ef] px-3 py-1 text-xs font-bold text-[#0f8b6f]">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-sm font-bold text-[#0f8b6f]">{project.status}</p>
              </div>
              <button
                className="mt-6 w-full rounded-full bg-[#17211d] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0f8b6f] hover:shadow-md"
                onClick={() => onNavigate(project.page)}
                type="button"
              >
                View Detail
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Projects
