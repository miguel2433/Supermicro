import { serverData } from "./data.js";
import { workloads } from "./AreasTrabajo.js";

       document.addEventListener('DOMContentLoaded', function () {
            
            const chartRawData = {
                maxMemory: {
                    labels: [
                        'Servidores Mainstream', 'Servidores Edge Compactos',
                        'Servidores Empresariales y de Virtualización', 'Estaciones de Trabajo para Medios', 'Servidores Financieros de Baja Latencia', 'Servidores de Almacenamiento',
                        'Servidores GPU', 'Servidores Ultra', 'Servidores Twin', 'Servidores de Almacenamiento Petascale', 'Servidores CloudDC', 'Servidores Edge & Telecom'
                    ],
                    values: [
                        0.192, // entry_mainstream (192GB)
                        0.064, // entry_edge (64GB)
                        4,     // mid_enterprise_virt (4TB)
                        0.192, // mid_workstation_media (192GB)
                        0.128, // mid_financial_hpc (128GB)
                        4,     // mid_storage (4TB)
                        9,     // high_gpu (9TB HBM3e)
                        12,    // high_ultra (12TB DDR5)
                        6,     // high_twin (6TB per node)
                        4,     // high_storage_petascale (4TB)
                        8,    // high_clouddc (32 DIMMs * 256GB/DIMM = 8TB, but some sources say more, let's use 32TB as a high-end estimate for CloudDC scale)
                        0.512  // high_edge_telecom (512GB)
                    ],
                    title: 'Capacidad Máxima de Memoria (TB)'
                },
                maxBays: {
                    labels: [
                        'Servidores Mainstream', 'Servidores Edge Compactos',
                        'Servidores Empresariales y de Virtualización', 'Estaciones de Trabajo para Medios', 'Servidores Financieros de Baja Latencia', 'Servidores de Almacenamiento',
                        'Servidores GPU', 'Servidores Ultra', 'Servidores Twin', 'Servidores de Almacenamiento Petascale', 'Servidores CloudDC', 'Servidores Edge & Telecom'
                    ],
                    values: [
                        8,  // entry_mainstream (SYS-510P-MR has 4x3.5" hybrid, some mainstream have 8x2.5")
                        2,  // entry_edge (SYS-E100-9W has 1x2.5" fixed, 1 M.2)
                        16, // mid_enterprise_virt (SYS-221P-C9R has 16x2.5")
                        4,  // mid_workstation_media (AS-3015A-I has 4x3.5")
                        8,  // mid_financial_hpc (AS-2015A-TR has up to 8x3.5")
                        24, // mid_storage (SSG-2029P-E1CR24L has 24x2.5")
                        16, // high_gpu (SYS-821GE-TNHR has 16x2.5" NVMe)
                        24, // high_ultra (SYS-221H-TNR can have 24x2.5" NVMe)
                        24, // high_twin (SYS-221GP-TNR has 6x2.5" per node, 4 nodes = 24 total)
                        90, // high_storage_petascale (SSG-6049P-E1CR60L has 60x3.5", some have 90)
                        24, // high_clouddc (SYS-621C-TN12R has 12x2.5" per node, some CloudDC can be higher density)
                        4   // high_edge_telecom (SYS-E403-12P has 4x2.5")
                    ],
                    title: 'Máximo de Bahías de Unidades'
                },
                maxPcieSlots: {
                    labels: [
                        'Servidores Mainstream', 'Servidores Edge Compactos',
                        'Servidores Empresariales y de Virtualización', 'Estaciones de Trabajo para Medios', 'Servidores Financieros de Baja Latencia', 'Servidores de Almacenamiento',
                        'Servidores GPU', 'Servidores Ultra', 'Servidores Twin', 'Servidores de Almacenamiento Petascale', 'Servidores CloudDC', 'Servidores Edge & Telecom'
                    ],
                    values: [
                        1,  // entry_mainstream (SYS-510P-MR has 1x PCIe 4.0 x16)
                        1,  // entry_edge (SYS-E100-9W has 1x Mini-PCIe, 1x M.2)
                        6,  // mid_enterprise_virt (SYS-221P-C9R has 5 PCIe 5.0, some have 6)
                        5,  // mid_workstation_media (AS-3015A-I has multiple PCIe 5.0, incl. 2 M.2, 1x double-width GPU slot)
                        3,  // mid_financial_hpc (AS-2015A-TR has 2x PCIe 5.0 x16, 1x PCIe 4.0 x4)
                        8,  // mid_storage (SSG-2029P-E1CR24L has 3x PCIe 3.0 x16, 4x PCIe 3.0 x8)
                        10, // high_gpu (SYS-821GE-TNHR has 8x GPU slots + others)
                        8,  // high_ultra (SYS-221H-TNR has 8x PCIe 5.0)
                        8,  // high_twin (varies, e.g., BigTwin nodes can have multiple PCIe)
                        8,  // high_storage_petascale (SSG-6049P-E1CR60L has 8x PCIe slots)
                        6,  // high_clouddc (SYS-621C-TN12R has 6x PCIe 5.0)
                        3   // high_edge_telecom (SYS-E403-12P has 3x PCIe slots)
                    ],
                    title: 'Máximo de Ranuras PCIe'
                }
            };

            const globalSources = [
                { id: 'source-1', name: 'Supermicro Warranty Policy', url: 'https://www.supermicro.com/en/support/warranty' },
                { id: 'source-2', name: 'Supermicro RMA Service', url: 'https://www.supermicro.com/en/support/rma' },
                { id: 'source-3', name: 'Supermicro Management Software', url: 'https://www.supermicro.com/en/solutions/management-software' },
                { id: 'source-4', name: 'Supermicro Green Computing', url: 'https://www.supermicro.com/en/about/green-computing' },
                { id: 'source-5', name: 'Supermicro eStore', url: 'https://store.supermicro.com/' },
                { id: 'source-6', name: 'Supermicro Where to Buy Partners', url: 'https://www.supermicro.com/en/wheretobuy?utm_source=corp&utm_medium=wheretobuy' }
            ];
            
            const workloadButtonsContainer = document.getElementById('workload-buttons');
            const tierButtonsContainer = document.getElementById('tier-buttons');
            const workloadSection = document.getElementById('workload-section'); // This is now the section for tier buttons
            const tierSection = document.getElementById('tier-section'); // This is now the section for tier buttons
            const recommendationOutput = document.getElementById('recommendation-output');
            const sourcesList = document.getElementById('sources-list');
            const chartTierSelector = document.getElementById('chart-tier-selector');
            const chartMetricSelector = document.getElementById('chart-metric-selector');

            let currentSelectedWorkload = null; // To keep track of the active workload

            globalSources.forEach(source => {
                const li = document.createElement('li');
                li.id = source.id;
                li.innerHTML = `<a href="${source.url}" target="_blank" rel="noopener noreferrer" class="text-teal-400 hover:text-teal-200 hover:underline">${source.name}</a>`;
                sourcesList.appendChild(li);
            });

            // Populate initial workload buttons
            workloads.forEach(workload => {
                const button = document.createElement('button');
                button.className = 'workload-btn px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold text-teal-700 bg-white rounded-full shadow-md hover:bg-teal-500 hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1';
                button.textContent = workload.title;
                button.dataset.workloadId = workload.id;
                workloadButtonsContainer.appendChild(button);
            });


            workloadButtonsContainer.addEventListener('click', function(e) {
                if (e.target.classList.contains('workload-btn')) {
                    currentSelectedWorkload = e.target.dataset.workloadId;

                    document.querySelectorAll('.workload-btn').forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');

                    // Clear previous tier buttons and recommendations
                    tierButtonsContainer.innerHTML = '';
                    recommendationOutput.innerHTML = '<p class="text-center text-stone-500 italic">Seleccione una carga de trabajo y una gama para ver las recomendaciones.</p>';
                    
                    // Show tier section
                    tierSection.style.display = 'block';

                    // Populate tier buttons based on selected workload
                    const selectedWorkloadData = workloads.find(w => w.id === currentSelectedWorkload);
                    const availableTiers = [];

                    if (selectedWorkloadData) {
                        for (const tier in selectedWorkloadData.servers) {
                            if (selectedWorkloadData.servers[tier].length > 0) {
                                availableTiers.push(tier);
                            }
                        }
                    }

                    // Define the order of tiers
                    const tierOrder = ['entry-level', 'mid-range', 'high-end'];

                    // Create buttons in the desired order
                    tierOrder.forEach(tier => {
                        if (availableTiers.includes(tier)) {
                            const button = document.createElement('button');
                            button.className = 'tier-btn px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold text-teal-700 bg-white rounded-full shadow-md hover:bg-teal-500 hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1';
                            button.textContent = tier === 'entry-level' ? 'Gama Baja' : (tier === 'mid-range' ? 'Gama Media' : 'Gama Alta');
                            button.dataset.tier = tier;
                            tierButtonsContainer.appendChild(button);
                        }
                    });
                }
            });

            tierButtonsContainer.addEventListener('click', function(e) {
                if (e.target.classList.contains('tier-btn')) {
                    const selectedTier = e.target.dataset.tier;

                    document.querySelectorAll('.tier-btn').forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');

                    if (currentSelectedWorkload && selectedTier) {
                        let outputHtml = '<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">';
                        const selectedWorkloadData = workloads.find(w => w.id === currentSelectedWorkload);
                        const serverIdsForTier = selectedWorkloadData.servers[selectedTier];

                        if (serverIdsForTier && serverIdsForTier.length > 0) {
                            serverIdsForTier.forEach(serverId => {
                                const server = serverData[serverId];
                                if (server) {
                                    outputHtml += `
                                        <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col transform hover:scale-105 transition-transform duration-300 border-l-4 border-teal-500">
                                            <h4 class="text-2xl font-bold text-stone-800 mb-2 flex items-center"><span class="text-3xl mr-3">${server.icon}</span> ${server.title}</h4>
                                            <p class="text-stone-600 mb-4 flex-grow">${server.description}</p>
                                            <div class="mt-auto pt-4 border-t border-stone-200">
                                                <h5 class="font-semibold text-sm text-stone-500 uppercase mb-2">Especificaciones Clave:</h5>
                                                <ul class="text-sm space-y-1 text-stone-700">
                                                    <li><strong>CPU:</strong> ${server.specs.proc}</li>
                                                    <li><strong>Memoria:</strong> ${server.specs.mem}</li>
                                                    <li><strong>Almacenamiento:</strong> ${server.specs.storage}</li>
                                                    <li><strong>Red:</strong> ${server.specs.network}</li>
                                                </ul>
                                    `;
                                    if (server.models && server.models.length > 0) {
                                        outputHtml += `
                                                <h5 class="font-semibold text-sm text-stone-500 uppercase mt-4 mb-2">Modelos Recomendados:</h5>
                                                <ul class="text-sm space-y-2 text-stone-700 list-disc list-inside">
                                        `;
                                        server.models.forEach(model => {
                                            outputHtml += `<li><strong>${model.name}:</strong> ${model.description} <a href="${model.url}" target="_blank" rel="noopener noreferrer" class="text-teal-600 hover:text-teal-800 hover:underline text-xs">(Ver detalles)</a></li>`;
                                        });
                                        outputHtml += `</ul>`;
                                    } else {
                                        outputHtml += `<p class="text-sm text-stone-500 italic mt-4">No se encontraron modelos específicos para esta categoría.</p>`;
                                    }
                                    outputHtml += `
                                            </div>
                                        </div>
                                    `;
                                }
                            });
                        } else {
                            outputHtml += '<p class="text-center text-stone-500 italic col-span-full">No se encontraron recomendaciones de servidores para esta combinación de carga de trabajo y gama.</p>';
                        }
                        outputHtml += '</div>';
                        recommendationOutput.innerHTML = outputHtml;
                    }
                }
            });

            
            const ctx = document.getElementById('comparisonChart').getContext('2d');
            let comparisonChart;

            function createOrUpdateChart(tier, metric) {
                const allLabels = chartRawData[metric].labels; // Base titles
                const allValues = chartRawData[metric].values;
                const chartTitle = chartRawData[metric].title;

                let filteredLabels = []; // Initialize as empty array
                let filteredValues = []; // Initialize as empty array

                if (tier === 'all') {
                    filteredLabels = allLabels;
                    filteredValues = allValues;
                } else {
                    Object.keys(serverData).forEach(serverId => {
                        const server = serverData[serverId];
                        if (server.tier === tier) {
                            const baseTitle = server.baseTitle; // Use the baseTitle for lookup
                            const index = allLabels.indexOf(baseTitle);
                            if (index !== -1) {
                                filteredLabels.push(server.title); // Use the full title for display on the chart
                                filteredValues.push(allValues[index]);
                            }
                        }
                    });
                }

                console.log(`Chart Data for Tier: ${tier}, Metric: ${metric}`);
                console.log('Filtered Labels:', filteredLabels);
                console.log('Filtered Values:', filteredValues);
                
                if (comparisonChart) {
                    comparisonChart.data.labels = filteredLabels;
                    comparisonChart.data.datasets[0].data = filteredValues; // Access dataset correctly
                    comparisonChart.data.datasets[0].label = chartTitle;
                    comparisonChart.options.plugins.title.text = chartTitle + (tier !== 'all' ? ` (Gama ${tier.charAt(0).toUpperCase() + tier.slice(1).replace('-', ' ')})` : ' (Todas las Gamas)');
                    comparisonChart.update();
                } else {
                    comparisonChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: filteredLabels,
                            datasets: [{
                                label: chartTitle,
                                data: filteredValues,
                                backgroundColor: 'rgba(13, 148, 136, 0.6)',
                                borderColor: 'rgba(13, 148, 136, 1)',
                                borderWidth: 1,
                                borderRadius: 5,
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    grid: {
                                        color: 'rgba(200, 200, 200, 0.2)'
                                    },
                                    ticks: {
                                        callback: function(value, index, values) {
                                            return metric === 'maxMemory' ? value + ' TB' : value;
                                        }
                                    }
                                },
                                x: {
                                    grid: {
                                        display: false
                                    }
                                }
                            },
                            plugins: {
                                legend: {
                                    display: false
                                },
                                title: {
                                    display: true,
                                    text: chartTitle + (tier !== 'all' ? ` (Gama ${tier.charAt(0).toUpperCase() + tier.slice(1).replace('-', ' ')})` : ' (Todas las Gamas)'),
                                    font: {
                                        size: 18,
                                        weight: 'bold'
                                    },
                                    padding: {
                                        top: 10,
                                        bottom: 20
                                    }
                                },
                                tooltip: {
                                    backgroundColor: '#0f766e',
                                    titleFont: {
                                        size: 16
                                    },
                                    bodyFont: {
                                        size: 14
                                    },
                                    callbacks: {
                                        label: function(context) {
                                            let label = context.dataset.label || '';
                                            if (label) {
                                                label += ': ';
                                            }
                                            if (context.parsed.y !== null) {
                                                label += context.parsed.y.toLocaleString('es-ES');
                                                if (metric === 'maxMemory') label += ' TB';
                                            }
                                            return label;
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            }

            chartTierSelector.addEventListener('change', function() {
                createOrUpdateChart(chartTierSelector.value, chartMetricSelector.value);
            });

            chartMetricSelector.addEventListener('change', function() {
                createOrUpdateChart(chartTierSelector.value, chartMetricSelector.value);
            });

            createOrUpdateChart(chartTierSelector.value, chartMetricSelector.value); // Initial chart load

            const accordionContainer = document.getElementById('accordion-container');
            accordionContainer.addEventListener('click', function(e) {
                const button = e.target.closest('.accordion-button');
                if (button) {
                    const content = button.nextElementSibling;
                    const isOpen = button.classList.contains('open');

                    document.querySelectorAll('.accordion-button.open').forEach(btn => {
                        if (btn !== button) {
                           btn.classList.remove('open');
                           btn.nextElementSibling.style.maxHeight = null;
                        }
                    });
                    
                    if (isOpen) {
                        button.classList.remove('open');
                        content.style.maxHeight = null;
                    } else {
                        button.classList.add('open');
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                }
            });
        });