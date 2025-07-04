export const workloads = [
    { id: 'render', title: 'Renderizado y Creación de Contenido', servers: {
        'entry-level': [], // No direct render servers in entry-level
        'mid-range': ['mid_workstation_media'],
        'high-end': ['high_gpu', 'high_ultra']
    }},
    { id: 'archive', title: 'Archivo de Medios y Almacenamiento', servers: {
        'entry-level': ['entry_mainstream'],
        'mid-range': ['mid_storage', 'mid_enterprise_virt'],
        'high-end': ['high_storage_petascale', 'high_ultra'] // Ultra servers can also be storage-optimized
    }},
    { id: 'stream', title: 'Streaming y CDN', servers: {
        'entry-level': ['entry_mainstream', 'entry_edge'],
        'mid-range': ['mid_storage', 'mid_enterprise_virt'],
        'high-end': ['high_storage_petascale', 'high_clouddc', 'high_edge_telecom']
    }},
    { id: 'cloud', title: 'Virtualización y Nube', servers: {
        'entry-level': ['entry_mainstream'],
        'mid-range': ['mid_enterprise_virt'],
        'high-end': ['high_twin', 'high_ultra', 'high_clouddc']
    }},
    { id: 'general', title: 'Uso General y TI para PYMEs', servers: {
        'entry-level': ['entry_mainstream'],
        'mid-range': ['mid_enterprise_virt', 'mid_workstation_media'],
        'high-end': [] // High-end typically not for "general PYMEs"
    }},
    { id: 'finance', title: 'Finanzas y Baja Latencia', servers: {
        'entry-level': [], // No specific finance servers in entry-level
        'mid-range': ['mid_financial_hpc'],
        'high-end': ['high_ultra'] // Ultra servers can be used for high-frequency trading due to low latency
    }},
    { id: 'remote', title: 'Producción Remota (Edge)', servers: {
        'entry-level': ['entry_edge'],
        'mid-range': ['mid_workstation_media'],
        'high-end': ['high_edge_telecom']
    }}
];