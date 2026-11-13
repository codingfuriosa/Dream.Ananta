/* Lead destination: the Jain Group CRM (realtybucket.com). Each enquiry is posted form-encoded to
   /webhook/website_form_data, which replies { success: true, lead: <id> } once the lead is created.
   project must match the CRM business unit name exactly ('Ananta'), or no lead is created.
   Clear endpoint to stop sending: the form then only unlocks the brochure and shows the thank-you page. */
window.ANANTA_LEADS = {
 endpoint: 'https://www.realtybucket.com/webhook/website_form_data',
 apikey: 'kG6vgYgUqEmnHUtHX15pNQ',
 project: 'Ananta',
 brochure: 'assets/brochures/ananta-lifestyle.pdf',
 thankYou: 'thank-you.html'
};
