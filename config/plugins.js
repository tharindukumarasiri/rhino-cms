module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: "strapi-provider-upload-supabase",
            providerOptions: {
                apiUrl: env("SUPABASE_API_URL"),
                apiKey: env("SUPABASE_API_KEY"),
                bucket: env("SUPABASE_BUCKET"),
                directory: env("SUPABASE_DIRECTORY"),
                options: {},
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: env('SENDGRID_API_KEY'),
            },
            settings: {
                defaultFrom: 'info@rhino-partners.com',
                defaultReplyTo: 'info@rhino-partners.com',
            },
        },
    },
});