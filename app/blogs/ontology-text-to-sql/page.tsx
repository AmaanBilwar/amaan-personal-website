'use client';

import Link from 'next/link';

export default function OntologyTextToSqlBlog() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 py-12 px-4 md:px-8">
      <article className="max-w-2xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-100 hover:bg-stone-800/80 transition-colors mb-8 text-sm px-2 py-1 -ml-2 rounded-md"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          back
        </Link>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
          why use an ontology for text-to-sql?
        </h1>
        <p className="text-stone-500 text-sm mb-6">November 21, 2025</p>

        {/* Cover image */}
        <img src="/blog/ontology.png" alt="TextQL Ontology Interface" className="w-full mb-6" />
        <hr className="border-stone-700 mb-8" />

        {/* Content */}
        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-lg md:text-xl font-medium text-stone-100 mb-3">
              what is an ontology?
            </h2>
            <p>
              you may have heard of the term "ontology" before, either used by palantir folks or
              others, but it's something that among many people are not familiar with and was
              something i also learned a few months ago when i started working at textql. more
              recently, i actually had the chance to work on the ontology and explore more about how
              it works with our product and how to make it easier for customers to use. there are
              many different types of ontologies but in this article i want to focus on the one that
              formally defines data and why we use it for text-to-sql queries.
            </p>
            <p className="mt-4">
              the google definition of an ontology is: a set of concepts and categories in a subject
              area or domain that shows their properties and the relations between them. if that
              doesn't make sense basically a fancy word for making a map of everything and how they
              connect to each other.
            </p>
            <figure className="mt-6">
              <img
                src="/blog/map.jpeg"
                alt="A map showing how concepts connect in an ontology"
                className="w-full"
              />
            </figure>
            <p className="mt-4">
              an ontology consists of entities, attributes, relationships, metrics and business
              rules. each of these are crucial for building a well-structured ontology. an entity is
              essentially an object that you can think of as a "thing" that your business cares
              about. while not required, entities often have a primary key that prevents
              double-counting and enables proper aggregation. each of these objects hold attributes
              which are like characteristics that describe the object. then there's relationships
              that basically connect each of these objects based on how they are related. these
              relationships work through joins - when entities share common fields that can be
              matched together, creating connections like one-to-many or many-to-many. for metrics,
              these are defined across multiple objects and can be done through a calculation of
              some sort. lastly, there are business rules that just define how your business
              operates and the meaning of specific terms or phrases.
            </p>
          </section>

          <section>
            <h3 className="text-base md:text-lg font-medium text-stone-200 mb-3">
              a simple example
            </h3>
            <p>
              here's a simple example using customers. a customer is someone who buys from your
              business. they have basic information like their name, email, and when they signed up.
              customers connect to other things in your business through joins: they place orders,
              contact support, and sometimes refer friends. you can measure things about customers
              like how much they've spent total or how often they buy. finally, you set rules that
              define what certain terms mean, like "active customer" means someone who bought
              something in the last 90 days, or "vip customer" means someone who has spent over
              $5,000. all these pieces work together to give you a complete picture of what a
              customer means to your business through an ontology object.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-medium text-stone-100 mb-3">
              why ontologies matter for text-to-sql
            </h2>
            <p>
              if you're curious as to why this is useful for text-to-sql queries, there are many
              upsides to having an ontology when queries many databases especially when they are
              enterprise size.
            </p>
            <p className="mt-4">
              when data analysts are writing complex queries these queries must be defined through
              the use of joins and company specific business logic. this wastes a lot of time as a
              lot of SQL is repeated and overcomplicated. with an ontology layer, you can abstract
              away this complexity by defining business entities, relationships, and metrics once.
              instead of every analyst needing to remember that "active customers" means users who
              made a purchase in the last 90 days and requires joining the users table with the
              orders table filtered by date, the ontology captures this definition centrally. this
              means when someone asks "show me revenue by active customer segment," the system
              already knows important information such as:
            </p>
            <ul className="mt-3 ml-4 space-y-1 text-stone-400">
              <li>• which tables to join</li>
              <li>• what filters to apply</li>
              <li>• how to calculate the metric correctly</li>
              <li>• what the proper grain of analysis should be</li>
            </ul>
            <figure className="mt-6">
              <img
                src="/blog/graphs.jpeg"
                alt="Graphs showing the comparison between ontology vs non-ontology sql queries"
                className="w-full"
              />
              <figcaption className="text-stone-500 text-xs mt-2 italic">
                graphs showing the comparison between ontology vs non-ontology sql queries
              </figcaption>
            </figure>
            <p className="mt-4">
              this means consistency across the organization, faster query generation, easier
              maintenance, lower barrier to entry, governance and security. essentially, the
              ontology becomes a semantic layer that translates between how humans think about the
              business and how data is actually stored in tables. it captures institutional
              knowledge about the data that would otherwise live in documentation, tribal knowledge,
              or the heads of senior analysts.
            </p>
            <p className="mt-4">
              ontologies can also improve performance. a well-designed ontology might define a
              metric using a pre-aggregated table instead of scanning raw data. it might know to use
              an indexed column for joins. it captures optimization knowledge that would otherwise
              require manual query tuning.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-medium text-stone-100 mb-3">
              building an ontology from scratch
            </h2>
            <p>
              now that you understand the basics of what an ontology is and why large organizations
              may want to use one, learning how to build an ontology is just as important.
            </p>
            <figure className="mt-6">
              <img
                src="/blog/adding-objects.jpeg"
                alt="Creating an object or link in ontology"
                className="w-full"
              />
              <figcaption className="text-stone-500 text-xs mt-2 italic">
                creating an object or link in ontology
              </figcaption>
            </figure>
            <p className="mt-4">
              when building an ontology, you begin with your core entities - the things your
              business literally cannot function without. for an e-commerce company, that's
              customers, orders, and products. for a saas company, it's users, subscriptions, and
              usage events. identify maybe 3-5 critical entities and define them thoroughly: their
              attributes, their primary keys, and the most important relationships between them.
            </p>
            <p className="mt-4">
              when choosing a primary key, pick a stable identifier that doesn't change over time,
              usually an id field like customer_id rather than something like email that might
              change. this determines the grain of your entity and prevents double-counting when you
              aggregate metrics. without a proper primary key, you risk counting the same customer
              twice or splitting their history across multiple identities.
            </p>
            <p className="mt-4">
              for relationships, focus on connections that represent real business flows and answer
              common questions. if people frequently ask "show me revenue by customer segment," you
              need a clear path from orders to customers. start with the relationships that enable
              your most important analyses rather than trying to map every possible connection
              upfront.
            </p>
            <p className="mt-4">
              then add the metrics that people ask about every single day. "what's our revenue?"
              "how many active users do we have?" "what's our conversion rate?" these are the
              questions that get asked in every morning meeting. define these once in the ontology
              with the correct business logic, and suddenly dozens of repeated queries become
              obsolete.
            </p>
            <p className="mt-4">
              the key is to prove value quickly. if you spend six months building a comprehensive
              ontology before anyone can use it, you'll lose organizational buy-in. but if you can
              show that three weeks of work eliminated the confusion around "active customers" and
              made that metric consistent across all reports, suddenly people want more entities in
              the ontology.
            </p>
            <figure className="mt-6">
              <img
                src="/blog/attrs.jpeg"
                alt="Creating attributes and editing object properties"
                className="w-full"
              />
              <figcaption className="text-stone-500 text-xs mt-2 italic">
                creating attributes and editing object properties
              </figcaption>
            </figure>
          </section>

          <section>
            <h3 className="text-base md:text-lg font-medium text-stone-200 mb-3">
              when is an ontology "good enough"?
            </h3>
            <p>
              an ontology is never complete. there will always be edge cases, niche metrics, and
              one-off analyses that don't fit neatly into your defined entities and relationships.
              the goal isn't perfection - it's coverage of the common cases. if your ontology
              handles 80% of the questions people ask, that's a massive win. the remaining 20% can
              still be handled with custom sql or ad-hoc analysis.
            </p>
            <p className="mt-4">you know your ontology is "good enough" when:</p>
            <ul className="mt-3 ml-4 space-y-1 text-stone-400">
              <li>
                • new analysts can answer common questions without asking senior team members for
                help
              </li>
              <li>• the same metrics stop appearing with different values in different reports</li>
              <li>
                • people start asking "is this in the ontology?" before writing custom queries
              </li>
              <li>• you're spending more time using the ontology than building it</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-medium text-stone-100 mb-3">
              how text-to-sql engines use ontologies
            </h2>
            <p>
              when you ask "show me revenue by customer segment," the text-to-sql engine goes
              through several steps using the ontology.
            </p>
            <p className="mt-4">
              first, it identifies the entities and metrics you're asking about. "revenue" maps to a
              defined metric in the ontology. "customer segment" maps to an attribute of the
              customer entity.
            </p>
            <p className="mt-4">
              next, it looks up the metric definition. the ontology says revenue is calculated as
              sum(orders.total_amount) where orders.status = 'completed'. it also knows that revenue
              is associated with the orders entity.
            </p>
            <p className="mt-4">
              then it determines the necessary joins. you asked for revenue by customer segment, so
              the engine needs to connect orders to customers. the ontology defines this
              relationship: orders.customer_id = customers.id. it knows this is a many-to-one
              relationship (many orders per customer).
            </p>
            <p className="mt-4">
              finally, it applies any business rules. maybe the ontology specifies that revenue
              calculations should exclude refunds, or that only orders from the last 12 months
              count. these rules get automatically incorporated into the generated sql. the result
              is a query that would take a human analyst 10 minutes to write (and possibly get
              wrong), generated correctly in seconds.
            </p>
            <figure className="mt-6">
              <img
                src="/blog/chat.png"
                alt="Querying a test database with Ana using the text-to-sql feature"
                className="w-full"
              />
              <figcaption className="text-stone-500 text-xs mt-2 italic">
                me querying a test database with ana using the text-to-sql feature
              </figcaption>
            </figure>
          </section>

          <section>
            <h3 className="text-base md:text-lg font-medium text-stone-200 mb-3">
              handling ambiguity
            </h3>
            <p>
              ambiguous questions are where ontologies really shine. if you ask "show me sales,"
              that could mean the sales team (entity), sales transactions (orders entity), sales
              revenue (metric), or sales count (different metric). without an ontology, the system
              has to guess. with an ontology, it can recognize that "sales" is ambiguous, check
              which interpretation makes sense in context, ask for clarification if needed ("did you
              mean sales revenue or number of sales?"), and use the most common interpretation based
              on usage patterns.
            </p>
            <p className="mt-4">
              the ontology also helps with synonyms. "customers," "clients," "accounts," and
              "buyers" might all map to the same customer entity.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-medium text-stone-100 mb-3">
              ontologies vs other approaches
            </h2>
            <p>
              <span className="text-stone-100 font-medium">dbt models:</span> dbt models and
              ontologies solve different problems. dbt transforms raw data into clean tables. an
              ontology sits on top of those tables and defines what they mean: which table
              represents customers, how customers relate to orders, and how to optimize queries. you
              can use both together: dbt produces tables, ontologies produce understanding.
            </p>
            <p className="mt-4">
              <span className="text-stone-100 font-medium">bi semantic layers:</span> tools like
              looker and tableau have their own semantic layers. looker has lookml, tableau has data
              sources with relationships. these serve similar purposes to ontologies - they define
              metrics, relationships, and business logic. the difference is scope and flexibility.
              traditional bi semantic layers are tightly coupled to their visualization tools. the
              definitions you create in looker only work in looker. if you want to use the same
              logic in python, or in a different bi tool, or in an automated pipeline, you're out of
              luck. an ontology is tool-agnostic. it's a central definition layer that can power
              text-to-sql queries, bi tools, python analysis, automated reports, and custom
              applications. you define "active customers" once, and it works everywhere.
            </p>
            <p className="mt-4">
              <span className="text-stone-100 font-medium">views and stored procedures:</span> views
              and stored procedures can encapsulate business logic, so why do you need an ontology?
              first, discoverability. if you have 500 views in your database, how do you know which
              one to use? an ontology provides a structured catalog with relationships and
              documentation. second, relationships. a view gives you a table, but it doesn't tell
              you how that table relates to other tables. an ontology explicitly defines these
              connections, enabling automatic join generation. third, natural language. you can't
              ask a view "show me revenue by customer segment" in plain english. you need to know
              the view exists, what it's called, and how to query it. an ontology enables natural
              language interfaces. views are a technical solution for code reuse. ontologies are a
              semantic solution for shared understanding.
            </p>
            <figure className="mt-6">
              <img
                src="/blog/sources.png"
                alt="Different tools comparing ontologies vs other methods"
                className="w-full"
              />
              <figcaption className="text-stone-500 text-xs mt-2 italic">
                different tools comparing ontologies vs other methods
              </figcaption>
            </figure>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-medium text-stone-100 mb-3">
              the future for ontologies
            </h2>
            <p>
              with the rise of llms, ontologies are actually going to be more valuable than ever. ai
              models are great at understanding natural language but terrible at knowing your
              specific business logic. gpt-5 doesn't know that your company defines "active
              customers" as 90-day activity, or that revenue should exclude certain transaction
              types, or that the customer table joins to orders via a specific foreign key. the
              ontology provides this context. it's the bridge between the llm's language
              understanding and your company's data reality. the llm handles the "what is the user
              asking?" part, the ontology handles the "how do we actually calculate that?" part. as
              llm models get better, ontologies become the key differentiator in how efficient and
              accurate users can query their large databases.
            </p>
            <p className="mt-4">
              imagine an ontology that evolves based on how people use it. when analysts repeatedly
              write similar custom queries, the system suggests adding those patterns to the
              ontology. when a metric definition gets manually overridden frequently, the system
              flags it for review. this is already starting to happen. systems can track which
              entities are queried together frequently and suggest adding explicit relationships.
              they can identify common calculated fields and propose promoting them to official
              metrics.
            </p>
            <p className="mt-4">
              as data landscapes grow more complex - more sources, more tables, more tools, more
              users - the need for ontologies increases exponentially. without an ontology,
              complexity scales badly. every new data source requires everyone to learn new table
              structures. every new analyst needs to be trained on all the business logic. every new
              tool needs custom integration. with an ontology, complexity scales linearly. new data
              sources get mapped to existing entities. new analysts learn the ontology once. new
              tools integrate with the ontology layer. the future of data isn't less complex - it's
              more complex but better organized. ontologies are how we manage that complexity
              without drowning in it.
            </p>
          </section>

          <section className="border-t border-stone-700 pt-6 mt-8">
            <h3 className="text-base font-medium text-stone-200 mb-3">references</h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>
                <a
                  href="https://builtin.com/data-science/ontology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  builtin.com/data-science/ontology
                </a>
              </li>
              <li>
                <a
                  href="http://blog.palantir.com/ontology-finding-meaning-in-data-palantir-rfx-blog-series-1-399bd1a5971b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  blog.palantir.com - ontology finding meaning in data
                </a>
              </li>
              <li>
                <a
                  href="https://www.palantir.com/docs/foundry/ontology/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  palantir.com/docs/foundry/ontology/overview
                </a>
              </li>
              <li>
                <a
                  href="https://docs.textql.com/core/how-it-works/ontology/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  docs.textql.com - ontology overview
                </a>
              </li>
            </ul>
            <p className="mt-4 text-stone-500 text-xs italic">
              note: all images in the original article were generated or taken from{' '}
              <a
                href="https://textql.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-300 underline"
              >
                textql
              </a>
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
