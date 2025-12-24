const secrets = {
	CLOUDFLARE_SECRET_KEY: new sst.Secret('CLOUDFLARE_SECRET_KEY', 'no-no')
};
export const allSecrets = Object.values(secrets);
