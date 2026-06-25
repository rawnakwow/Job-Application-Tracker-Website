const originalJobsDataset = [
    { id: 1, companyName: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-Time", salary: "$110,000 - $135,000", description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status: "all" },
    { id: 2, companyName: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-Time", salary: "$80,000 - $100,000", description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern design tools.", status: "all" },
    { id: 3, companyName: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA", type: "Full-Time", salary: "$105,000 - $125,000", description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status: "all" },
    { id: 4, companyName: "CloudFirst Inc", position: "Backend Developer", location: "Seattle, WA", type: "Full-Time", salary: "$140,000 - $160,000", description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status: "all" },
    { id: 5, companyName: "Innovation Labs", position: "UI/UX Engineer", location: "Austin, TX", type: "Full-Time", salary: "$110,000 - $130,000", description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status: "all" },
    { id: 6, companyName: "MegaCorp Solutions", position: "JavaScript Developer", location: "New York, NY", type: "Full-Time", salary: "$130,000 - $150,000", description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status: "all" },
    { id: 7, companyName: "StartupXYZ", position: "Full Stack Engineer", location: "San Francisco, CA", type: "Full-Time", salary: "$150,000 - $180,000", description: "Join our fast-growing startup and take ownership of end-to-end features. Tech stack: TypeScript, Node.js, and React.", status: "all" },
    { id: 8, companyName: "FinTech Global", position: "Security Analyst", location: "Chicago, IL", type: "Full-Time", salary: "$120,000 - $145,000", description: "Protect our financial platforms against threats. Perform vulnerability assessments, monitoring, and incident response operations.", status: "all" }
];

let runtimeJobsState = [...originalJobsDataset];
let currentlySelectedTab = 'all';


const cardsContainer = document.getElementById('job-cards-container');
const emptyStateContainer = document.getElementById('empty-state');
const sectionCountText = document.getElementById('section-count');
const totalCounter = document.getElementById('count-total');
const interviewCounter = document.getElementById('count-interview');
const rejectedCounter = document.getElementById('count-rejected');

document.addEventListener("DOMContentLoaded", () => {
    renderDashboardUI();
});

function renderDashboardUI() {
    const totalCount = runtimeJobsState.length;
    const interviewCount = runtimeJobsState.filter(j => j.status === 'interview').length;
    const rejectedCount = runtimeJobsState.filter(j => j.status === 'rejected').length;

    totalCounter.innerText = totalCount;
    interviewCounter.innerText = interviewCount;
    rejectedCounter.innerText = rejectedCount;

    let filteredJobs = [];
    if (currentlySelectedTab === 'all') {
        filteredJobs = runtimeJobsState;
    } else {
        filteredJobs = runtimeJobsState.filter(job => job.status === currentlySelectedTab);
    }

    sectionCountText.innerText = filteredJobs.length;

    if (filteredJobs.length === 0) {
        cardsContainer.innerHTML = "";
        emptyStateContainer.style.display = "flex";
    } else {
        emptyStateContainer.style.display = "none";
        cardsContainer.innerHTML = filteredJobs.map(job => createTemplateString(job)).join('');
    }
}

function createTemplateString(job) {
    const isInterviewActive = job.status === 'interview';
    const isRejectedActive = job.status === 'rejected';

    let badgeMarkup = `<span class="inline-block text-[10px] font-extrabold px-2 py-0.5 rounded bg-blue-50 text-blue-600 tracking-wider">NOT APPLIED</span>`;
    if (isInterviewActive) {
        badgeMarkup = `<span class="inline-block text-[10px] font-extrabold px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 tracking-wider">INTERVIEW</span>`;
    } else if (isRejectedActive) {
        badgeMarkup = `<span class="inline-block text-[10px] font-extrabold px-2 py-0.5 rounded bg-rose-50 text-rose-600 tracking-wider">REJECTED</span>`;
    }

    return `
        <div class="border border-gray-200 rounded-lg p-5 flex flex-col justify-between relative bg-white hover:border-gray-300 transition">
            
            <!-- Top Container Meta Block -->
            <div class="space-y-2">
                <div class="flex items-start justify-between">
                    <div>
                        <h4 class="text-sm font-bold text-indigo-600">${job.companyName}</h4>
                        <h3 class="text-base font-bold text-slate-900 mt-0.5">${job.position}</h3>
                    </div>
                    <!-- Right-side Delete Icon Trigger Component -->
                    <button onclick="deleteCard(${job.id})" class="text-gray-300 hover:text-rose-600 p-1 transition" title="Remove Application">
                        <i class="fa-regular fa-trash-can text-sm"></i>
                    </button>
                </div>

                <!-- Attributes Metadata Strip -->
                <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400 font-medium">
                    <span>${job.location}</span>
                    <span class="text-gray-200">•</span>
                    <span>${job.type}</span>
                    <span class="text-gray-200">•</span>
                    <span>${job.salary}</span>
                </div>

                <!-- Live Status Indicators -->
                <div class="pt-1">
                    ${badgeMarkup}
                </div>

                <!-- Summary Meta Description Block -->
                <p class="text-xs text-gray-500 leading-relaxed pt-2">${job.description}</p>
            </div>

            <!-- Structural Functional Control Interactive Buttons Block Layout -->
            <div class="flex gap-2 mt-5 pt-4 border-t border-gray-100">
                <button onclick="updateStatus(${job.id}, 'interview')" 
                    class="px-3 py-1.5 text-xs font-bold rounded border transition-all 
                    ${isInterviewActive ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}">
                    Interview
                </button>
                <button onclick="updateStatus(${job.id}, 'rejected')" 
                    class="px-3 py-1.5 text-xs font-bold rounded border transition-all 
                    ${isRejectedActive ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}">
                    Rejected
                </button>
            </div>
        </div>
    `;
}

function updateStatus(id, targetedValue) {
    runtimeJobsState = runtimeJobsState.map(job => {
        if (job.id === id) {
            return { ...job, status: job.status === targetedValue ? 'all' : targetedValue };
        }
        return job;
    });
    renderDashboardUI();
}

function deleteCard(id) {
    runtimeJobsState = runtimeJobsState.filter(job => job.id !== id);
    renderDashboardUI();
}

function switchTab(tabName) {
    currentlySelectedTab = tabName;
    
    ['all', 'interview', 'rejected'].forEach(t => {
        const btn = document.getElementById(`tab-${t}`);
        if (t === tabName) {
            btn.className = "px-4 py-2 rounded bg-slate-900 text-white transition-all";
        } else {
            btn.className = "px-4 py-2 rounded bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all";
        }
    });

    renderDashboardUI();
}
