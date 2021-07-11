import { IPost } from './portfolio-post.model';

export const PROJECTS: IPost[] = [
    {
        slug: 'iot',
        title: 'Tracking Devices projects',
        tags: ['iot', 'nodejs', 'messaging', 'nodejs net', 'typescript', 'spring batch'],
        description: 'Tracking devices by connecting to firmware, showing data on cloud and remotely monitor operations.',
        text: `
        <div>Projects: <a class="mat-icon-button" href="https://vuletech.com/en/san-pham/i-mag/" target="_blank"><i class="fas fa-link"></i> i-Mag</a></div>
        <p>Some projects are IoT systems, we track device’s on, off statuses and environments such as: pH in water, temperature, level, power, etc. Operator
        also control device on mobile or web application. I collect backend of device’s data and commands.</p>
        `,
    },
    {
        slug: 'dialogxtender',
        title: 'Messaging Bot services',
        tags: ['chatbot', 'google', 'nodejs'],
        description: 'Using 3rd Google service Dialogflow API – NLP (Natural Language Processing) to do chatbot, email bot',
        text: `
        <p>
            Using 3rd Google service Dialogflow API – NLP (Natural Language
            Processing) to do chatbot, email bot services and integrate them through another chat or messaging services like Gmail, Zendesk,
            Chatfuel, Messenger, WhatsApp, etc.
        </p>
        <p>
            Email bot service is incoming email client to receive customer’s email and
            use NLP to reply them, saving information or notify to another side with email or APIs request.
        </p>
        <p>
            Zendesk is service with chat widget. The bot can reply
            incoming messages from customers by using Zendesk Chat API.
        </p>
        <p>
            Chatfuel is a service integrate to Messenger Platform (MP) for using
            Facebook Page that has many methods and including JSON API method. It helps me connect to MP and has the endpoint webhook to use
            NLP and auto reply messages to Facebook end-users stably.
        </p>
        <p>
            DialogXTender is SSR backend web application to manage bot’s configurations.
        </p>
        `,
    },
    {
        slug: 'tng',
        title: 'TheNewGym',
        tags: ['microservices', 'sso', 'nestjs', 'typescript'],
        description: 'TheNewGym is microservice system to manage operation of customer, PT in the gym.',
        text: `
        <div>Website: <a class="mat-icon-button" href="https://www.thenewgym.vn/en" target="_blank"><i class="fas fa-link"></i> TheNewGym</a></div>
        <p>My tasks were building user service
        with OAuth2 Hydra to provide authentication for platforms and support
        APIs.</p>
        <p>The main APIs provide for many client sides: mobiles, webs with modular and microservices architecture.</p>
        <p>The authentication and authorization we used are OAuth2, Casbin.</p>
        `,
    },
    {
        slug: 'OTS',
        title: 'OTS',
        tags: ['webapplication', 'saas', 'yii2'],
        description: 'Building small tracking product system with scanning QR code label in SaaS.',
        text: `
        <p>In product OTS, I created backend CMS for customer track and prepare their trace data based on system generated unique code.
        This code can be exported to excel for printing labels or to single QR image for test only.
        Customer also integrate 3rd trace data to this QR code. Anyone using mobile phone scan this QR will see a web of trace data.</p>
        <p>I built RBAC feature into CMS so each customer can manage their users and scopes.
        I also created another admin CMS to manage details of customer.</p>
        <p>In another parts, This system has APIs and a mobile application for customer update their trace data.</p>
        `
    },
    {
        slug: 'ikygps',
        title: 'IKY-GPS',
        tags: ['webapplication', 'bigdata', 'php yii2', 'jquery'],
        description: 'Creating and building web application and tcp connection to track the journey, statuses of vehicles.',
        text: `
        <p>Creating and building IKY GPS web
                    application to track the journey, statuses of
                    vehicles and using Google Map API Services
                    to draw the history polyline.</p>
        <p>In outsourcing IKYGPS, i created web map view for about 2000 users to watching and control their vehicles ,
        there are 500 users use their device and about from 500k-1 million data per day
        as i know so that i have paid a lot of attention to performance of web view and database queries for this case.
        <p>I also create REST APIs with open authentication for mobile  application was handled by another team.</p>
        <p>In map view, i use jquery widget and 3rd party Google Map API to draw user's locations with polylines,
        markers of mounted device in vehicle. The authorization method is RBAC
        so the user only can access which function scope admin allow to.</p>
        <p>In device communication, i used java with TCP connection between server and device USSD to store locations.</p>
        <p>In data case, i create index for big data in 6 months and clear old data per day.
        Also user can export their data by excel, pdf report each month.</p>
        `,
    },
    {
        slug: 'accredo-api',
        title: 'Accredo US',
        tags: ['webapplications', 'supplychain', 'php yii', 'jquery'],
        description: 'Maintain web applications of supply chain system.',
        text: `
        <p>Maintain IT Web and Form applications for Accredo US customer company that produces advance polybag
        with supply chain process include: producing, shipping, maintaining machine, HR, CRM, etc.</p>
        `,
    },
];
