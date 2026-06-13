/**
 * JSDoc ini opsional mau dibuat cek ketat atau tidak.
 * Boleh dihapus, boleh dibuat ketat.
 * @param {string} text Teks yang diambil dari berkas
 * @returns {import('./structure').RobotsTxt} 
 */
function parseRobots(text) {
    const lines = text.split(/\r?\n/);
    
    const result = {
        agents: {},
        Sitemap: []
    };

    let currentAgents = [];

    for (let i = 0; i < lines.length; i++) {
        const cleanLine = lines[i].split('#')[0].trim();
        
        if (!cleanLine) continue;

        const colonIndex = cleanLine.indexOf(':');
        if (colonIndex === -1) continue;

        const key = cleanLine.substring(0, colonIndex).trim().toLowerCase();
        const value = cleanLine.substring(colonIndex + 1).trim();

        if (key === 'user-agent') {
            const agentName = value.toLowerCase();

            if (currentAgents.length > 0) {
                const firstAgent = currentAgents[0];
                if (result.agents[firstAgent].Allow.length > 0 || 
                    result.agents[firstAgent].Disallow.length > 0) {
                    currentAgents = [];
                }
            }

            currentAgents.push(agentName);

            if (!result.agents[agentName]) {
                result.agents[agentName] = {
                    Allow: [],
                    Disallow: []
                };
            }
        } else if (key === 'allow') {
            if (value !== "") {
                currentAgents.forEach(agent => {
                    result.agents[agent].Allow.push(value);
                });
            }
        } else if (key === 'disallow') {
            if (value !== "") {
                currentAgents.forEach(agent => {
                    result.agents[agent].Disallow.push(value);
                });
            }
        } else if (key === 'sitemap') {
            if (value !== "") {
                result.Sitemap.push(value);
            }
        } else if (key === 'host') {
            if (value !== "") {
                result.Host = value;
            }
        }
    }

    return result;
}

module.exports = parseRobots;