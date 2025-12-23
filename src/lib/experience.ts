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
		'Developed Flutter mobile applications with backend integration. Designed REST APIs and implemented CI/CD pipelines. Built interactive 3D visualizations using Three.js for web platforms.',
	dateFrom: 'OCT 2018',
	dateTo: 'DEC 2020',
	tech: ['Flutter', 'Dart', 'Javascript', 'Three.js', 'Postgres', 'AWS']
};

const entelectStdBank: Experience = {
	companyName: 'Entelect',
	subtitle: 'Standard Bank',
	position: 'Software Engineer',
	description:
		'Built business banking mobile applications for iOS and Android using Backbase framework. Developed native features in Swift and Kotlin, delivering cross-platform solutions for enterprise banking clients.',
	dateFrom: 'AUG 2021',
	dateTo: 'JAN 2023',
	tech: ['Android', 'iOS', 'Swift', 'Kotlin', 'Backbase', 'Jira', 'Confluence']
};

const entelectOM: Experience = {
	companyName: 'Entelect',
	subtitle: 'Old Mutual',
	position: 'Intermediate Software Engineer',
	description:
		'Developed SMEgo platform using Flutter and Dart. Refactored legacy codebase to improve maintainability and performance, working with Java backends and AWS infrastructure.',
	dateFrom: 'JUN 2023',
	dateTo: 'FEB 2024',
	tech: ['Flutter', 'Dart', 'Java', 'Postgres', 'AWS', 'Jira', 'Confluence']
};

const journeyApps: Experience = {
	companyName: 'JourneyApps',
	position: 'Product Engineer',
	description:
		'Building cross-platform sync SDKs for Flutter, React Native, Web, and Kotlin Multiplatform. Optimized PowerSync Flutter plugin performance and authored technical proposals and blog posts on local storage solutions.',
	dateFrom: 'MARCH 2024',
	dateTo: 'PRESENT',
	tech: ['Flutter', 'SQLite', 'React Native', 'Typescript', 'Javascript', 'Wasm']
};

export { kopanoAi, dynexIt, entelectStdBank, entelectOM, journeyApps };
