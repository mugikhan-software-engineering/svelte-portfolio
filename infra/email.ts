export const email = new sst.aws.Email('HelpEmail', {
	sender: 'mugikhan@gmail.com',
	transform: {
		identity: (args, opts) => {
			args.configurationSetName = undefined;
			opts.import = 'mugikhan@gmail.com';
		}
	}
});
