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
		'During my final year of study (4th year) I was working as a software engineering intern. My focus was on front-end development in React, HTML and CSS. I collaborate in a team focused environment providing solutions and design to diverse industry clients.',
	dateFrom: 'MAY 2018',
	dateTo: 'OCT 2018',
	tech: ['React', 'Javascript']
};

const dynexIt: Experience = {
	companyName: 'Dynex.IT',
	position: 'Software Engineer',
	description:
		'I joined Entelect at the start of 2021 for corporate project exposure. My focus was on full stack development but initially I was assigned to a bank as a mobile developer. I started work originally as an android developer on the banks business banking mobile application using Backbase. The bulk of the work was on the iOS side and this resulted in me pivoting and learning swift. I can confidently say I can complete features in both iOS and Android.',
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
		'Currently, I am employed at Old Mutual, where I actively contribute to the development of their SMEgo platform. Concurrently, I am enhancing my expertise in Flutter and Java, bettering my skill set to better serve the organization. The platform itself presents numerous challenges, compounded by demanding time constraints. Moreover, it faces the issue of legacy code that was inadequately implemented, necessitating substantial refactoring efforts.',
	dateFrom: 'JUN 2023',
	dateTo: 'PRESENT',
	tech: ['Flutter', 'Dart', 'Java', 'Postgres', 'AWS', 'Jira', 'Confluence']
};

export { kopanoAi, dynexIt, entelectStdBank, entelectOM };
