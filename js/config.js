// ============================================================
// CONFIG — All API endpoints and settings in one place
// Modify URLs here when your webhooks change
// ============================================================

const CONFIG = {
    // n8n Webhook: Add/create expenses in Zoho Books
    EXPENSE_WEBHOOK_URL: "http://168.144.82.188:5678/webhook/zohobooks",

    // n8n Webhook: Get all expenses from Zoho Books
    GET_EXPENSES_URL: "http://168.144.82.188:5678/webhook/getexpences",

    // n8n Webhook: AI Chat assistant
    CHAT_WEBHOOK_URL: "http://168.144.82.188:5678/webhook/d927bd76-dbf6-4793-97e1-6ce1c3251034/chat",

    // n8n Webhook: Add/create income in Supabase
    INCOME_WEBHOOK_URL: "http://168.144.82.188:5678/webhook/add-income",

    // n8n Webhook: Get all income from Supabase
    GET_INCOMES_URL: "http://168.144.82.188:5678/webhook/get-income",
};
