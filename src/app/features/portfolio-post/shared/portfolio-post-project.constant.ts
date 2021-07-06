import { IPost } from './portfolio-post.model';

export const PROJECTS: IPost[] = [
    {
        slug: 'dialogxtender',
        title: '3 Messaging Bot projects',
        tags: ['chatbot', 'google'],
        description: 'Using 3rd Google service Dialogflow API – NLP (Natural Language Processing) to do chatbot, email bot',
        text: `
        <p>
            Using 3rd Google service Dialogflow API – NLP (Natural Language
            Processing) to do chatbot, email bot in Automailbot, Zendeskbot,
            Chatfuel applications
        </p>
        <p>
            Automailbot is incoming email client to receive customer’s email and
            use NLP to reply them then sending customer information to staff’s
            email to access.
        </p>
        <p>
            Zendeskbot is zendesk service with a chat widget. The bot can reply
            incoming messages from customers.
        </p>
        <p>
            Chatfuel is a service integrate to Messenger Platform for the
            Facebook Page using JSON API method. It is endpoint webhook to use
            NLP and auto reply messages.
        </p>

        <p>
            DialogXTender is SSR web application to manage bot’s configurations.
        </p>
        `,
    },
    {
        slug: 'ikygps',
        title: 'IKY-GPS',
        tags: ['webapplication', 'bigdata'],
        description: 'Creating and building IKY GPS web application to track the journey, statuses of vehicles.',
        text: `
        <p>Creating and building IKY GPS web
                    application to track the journey, statuses of
                    vehicles and using Google Map API Services
                    to draw the history polyline.</p>
        <p>In outsourcing IKYGPS, i created web map view  for about 2000 users to watching and control their vehicles ,
        there are 500 users use their device and about from 500k-1 million data per day
        as i know so that i have paid a lot of attention to performance of web view and database queries for this case.
        <p>I also create REST APIs with open authentication for mobile  application was handled by  another team.</p>
        <p>In map view, i use jquery widget and  3rd party Google Map API to draw user's locations  with polylines,
        markers of mounted device in vehicle. The authorization method is RBAC
        so the user only can access which function scope admin allow to.</p>
        <p>In device communication, i used java with TCP connection between server and device USSD to store locations.</p>
        <p>In data case, i create index for big data in 6 months and clear old data per day.
        Also user can export their data by excel, pdf report  each month.</p>
        `,
    },
    {
        slug: 'OTS',
        title: 'OTS',
        tags: ['webapplication', 'saas'],
        description: 'People can track origin of any product information by scanning QR code label.',
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
        slug: 'tng',
        title: 'TheNewGym',
        tags: ['microservices', 'sso'],
        description: 'TheNewGym is microservice system to manage operation of customer, PT in the gym.',
        text: `
        <p>My tasks were building user service
        with OAuth2 Hydra docker to provide
        authentication for platforms and support
        APIs.</p>
        `,
    },
];
