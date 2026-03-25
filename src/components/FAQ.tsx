import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Как записать ребёнка в школу?",
    answer:
      "Для зачисления в 1 класс необходимо подать заявление через портал Госуслуги или обратиться лично в секретариат школы. Приём документов начинается 1 апреля. Для перевода из другой школы — свяжитесь с администрацией в любое время учебного года.",
  },
  {
    question: "Какой режим работы школы?",
    answer:
      "Занятия проходят с понедельника по пятницу. Первая смена начинается в 8:00, вторая — в 14:00. Группы продлённого дня работают до 18:00. Столовая обеспечивает горячее питание для всех учеников.",
  },
  {
    question: "Какие кружки и секции есть в школе?",
    answer:
      "В школе работают более 20 кружков и секций: футбол, волейбол, баскетбол, театральная студия, хор, художественная мастерская, робототехника, шахматы и многие другие. Большинство занятий бесплатны для учеников школы.",
  },
  {
    question: "Как проходит подготовка к ОГЭ и ЕГЭ?",
    answer:
      "Подготовка ведётся системно с 9 класса. Работают дополнительные занятия по профильным предметам, репетиционные экзамены и консультации с учителями. Наши выпускники стабильно показывают результаты выше среднегородских.",
  },
  {
    question: "Есть ли в школе психолог и социальный педагог?",
    answer:
      "Да, в школе работают психолог и социальный педагог. Они проводят индивидуальные консультации, помогают в сложных ситуациях и работают с родителями. Запись на приём — через классного руководителя или напрямую.",
  },
  {
    question: "Как связаться с администрацией школы?",
    answer:
      "Вы можете позвонить по телефону, написать на электронную почту или прийти лично в часы приёма. Директор принимает родителей по предварительной записи каждый вторник с 15:00 до 17:00.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
