export interface Experience {
	companyName: string;
	subtitle?: string;
	position: string;
	description: string;
	dateFrom: string;
	dateTo: string;
	tech: string[];
}

const kopanoAi: Experience = {
	companyName: 'Kopano.ai',
	position: 'Software Engineering Intern',
	description:
		'During my final year of study (4th year) I started my career as a software engineering intern. My focus was on front-end development in React, HTML and CSS. I collaborated in a team focused environment providing bespoke solutions for the main product at the time, Loom.',
	dateFrom: 'MAY 2018',
	dateTo: 'OCT 2018',
	tech: ['React', 'Javascript']
};

const dynexIt: Experience = {
	companyName: 'Dynex.IT',
	position: 'Software Engineer',
	description:
		'During my final year of study (4th year) I also started working as a software engineer at Dynex.IT. My focus was mainly on front-end development in Flutter as well as integration of back-end systems with the front-end. I also dabbled in API design and CI/CD.',
	dateFrom: 'OCT 2018',
	dateTo: 'DEC 2020',
	tech: ['Flutter', 'Dart', 'Javascript', 'Three.js', 'Postgres', 'AWS']
};

const entelectStdBank: Experience = {
	companyName: 'Entelect',
	subtitle: 'Standard bank',
	position: 'Software Engineer',
	description:
		'I joined Entelect at the start of 2021 for corporate project exposure. My focus was on full stack development but initially I was assigned to a bank as a mobile developer. I started work originally as an android developer on the banks business banking mobile application using Backbase. The bulk of the work was on the iOS side and this resulted in me pivoting and learning swift. I can confidently say I can complete features in both iOS and Android.',
	dateFrom: 'AUG 2021',
	dateTo: 'JAN 2023',
	tech: ['Android', 'iOS', 'Swift', 'Kotlin', 'Backbase', 'Jira', 'Confluence']
};

const entelectOM: Experience = {
	companyName: 'Entelect',
	subtitle: 'Old Mutual',
	position: 'Intermediate Software Engineer',
	description:
		'My last project at Entelect was at OM, where I actively contributed to the development of their SMEgo platform. The platform itself presented numerous challenges, compounded by demanding time constraints. It also faced the issue of legacy code that was inadequately implemented, necessitating substantial refactoring efforts.',
	dateFrom: 'JUN 2023',
	dateTo: 'FEB 2024',
	tech: ['Flutter', 'Dart', 'Java', 'Postgres', 'AWS', 'Jira', 'Confluence']
};

const journeyApps: Experience = {
	companyName: 'JourneyApps',
	position: 'Product Engineer',
	description:
		'I am currently working at JourneyApps on their Backend DB to SQLite sync engine product. I am responsible for maintaining and improving various parts of the client SDKs using different languages and frameworks. I have worked across the Flutter, React Native, Web and Kotlin Multiplatform client SDKs. My responsibilities also included writing technical proposals for new solutions and blog posts about local storage. A significant achievement in my role has been in improving native Flutter plugins, including optimizing the PowerSync Flutter plugin.',
	dateFrom: 'MARCH 2024',
	dateTo: 'PRESENT',
	tech: ['Flutter', 'SQLite', 'React Native', 'Typescript', 'Javascript', 'Wasm']
};

export { kopanoAi, dynexIt, entelectStdBank, entelectOM, journeyApps };
