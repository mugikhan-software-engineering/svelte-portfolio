import mobileDev from '$lib/assets/svg/mobile-development.svg';
import webDev from '$lib/assets/svg/coding-web.svg';
import code from '$lib/assets/svg/code.svg';
import maintenance from '$lib/assets/svg/maintenance.svg';

import mobileDevLight from '$lib/assets/svg/mobile-development-black.svg';
import webDevLight from '$lib/assets/svg/coding-web-black.svg';
import codeLight from '$lib/assets/svg/code-black.svg';
import maintenanceLight from '$lib/assets/svg/maintenance-black.svg';

const services = {
	mobile: mobileDev,
	web: webDev,
	backend: code,
	maintenance: maintenance
};

const servicesLight = {
	mobile: mobileDevLight,
	web: webDevLight,
	backend: codeLight,
	maintenance: maintenanceLight
};

export { services, servicesLight };
