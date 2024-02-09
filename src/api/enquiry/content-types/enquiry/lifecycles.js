module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugins['email'].services.email.send({
                to: 'tharindu.kumarasiri@rhino-partners.com',
                from: 'tharindu.kumarasiri@rhino-partners.com',
                subject: 'Client enquiry',
                text: `Name: ${result.firstName} ${result.lastName} \nEmail: ${result?.email} \nPhone: ${result?.phone} \nEnquiry: ${result?.enquiry}`
            })
            await strapi.plugins['email'].services.email.send({
                to: result?.email,
                from: 'tharindu.kumarasiri@rhino-partners.com',
                subject: 'We\'ve got your enquiry',
                text: 'Thank you for getting in touch with us'
            })
        } catch (err) {
            console.log(err)
        }
    }
}