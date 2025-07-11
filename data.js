export const serverData = {
    entry_mainstream: {
        baseTitle: 'Servidores Mainstream',
        title: 'Servidores Mainstream (Gama Baja)',
        description: 'Soluciones versátiles y de nivel de entrada para web hosting, servidores de correo y aplicaciones de PYMEs con un presupuesto ajustado.',
        icon: '🌱',
        specs: { proc: 'Single Intel Xeon E, Single AMD Ryzen/EPYC', mem: 'Hasta 192GB DDR4/DDR5', storage: 'SATA, M.2 NVMe', network: '1GbE' },
        tier: 'entry-level',
        models: [
            { name: 'SYS-510P-MR', description: 'Servidor 1U de gama baja orientado a pequeñas empresas, ideal para aplicaciones web, hosting y servidor de correo electrónico.', url: 'https://www.supermicro.com/en/products/system/UP/1U/SYS-510P-MR' },
            { name: 'AS-1015A-MT', description: 'Servidor 1U para plataforma AMD (A+ Server), solución compacta de entrada para PYMEs, ideal para aplicaciones web, hosting o firewall.', url: 'https://www.supermicro.com/en/products/system/Mainstream/1U/AS-1015A-MT' }
        ]
    },
    entry_edge: {
        baseTitle: 'Servidores Edge Compactos',
        title: 'Servidores Edge Compactos (Gama Baja)',
        description: 'Sistemas robustos y de bajo consumo para despliegues en el borde de la red, como señalización digital, seguridad y pequeñas oficinas remotas.',
        icon: '📡',
        specs: { proc: 'Intel Atom, Celeron, Core i', mem: 'Hasta 64GB DDR4', storage: 'M.2, SATA', network: '1GbE, WiFi' },
        tier: 'entry-level',
        models: [
            { name: 'SYS-E100-9W-L', description: 'Mini servidor Edge fanless, ideal para IoT y aplicaciones embebidas.', url: 'https://www.supermicro.com/en/products/system/box_pc/sys-e100-9w-l.cfm' }
        ]
    },

    // Gama Media (Mid-Range)
    mid_enterprise_virt: {
        baseTitle: 'Servidores Empresariales y de Virtualización',
        title: 'Servidores Empresariales y de Virtualización (Gama Media)',
        description: 'Servidores equilibrados para virtualización general, bases de datos de tamaño medio y aplicaciones empresariales estándar.',
        icon: '🏢',
        specs: { proc: 'Dual Intel Xeon Scalable, Dual AMD EPYC', mem: 'Hasta 4TB DDR4/DDR5', storage: 'NVMe/SAS/SATA Hot-swap', network: '1GbE, 10GbE' },
        tier: 'mid-range',
        models: [
            { name: 'SYS-220P-C9R', description: 'Servidor 2U dual-socket Xeon optimizado para bases de datos y almacenamiento de alta densidad.', url: 'https://www.supermicro.com/en/products/system/mainstream/2u/sys-220p-c9r' },
            { name: 'SYS-221P-C9R', description: 'Servidor 2U con dos sockets Xeon Scalable y cinco ranuras PCIe 5.0, diseñado para virtualización y tareas empresariales generales.', url: 'https://www.supermicro.com/en/products/system/mainstream/2u/sys-221p-c9r' },
            { name: 'SYS-620P-TRT', description: 'Servidor 2U de doble socket Intel con conectividad 10GbE, equilibrado para virtualización exigente y análisis.', url: 'https://www.supermicro.com/en/products/system/mainstream/2u/sys-620p-trt' },
            { name: 'SYS-621P-TR', description: 'Servidor 2U dual-socket Xeon de alto rendimiento, diseñado para entornos de virtualización y aplicaciones de servidor intensivas.', url: 'https://www.supermicro.com/en/products/system/mainstream/2u/sys-621p-tr' },
            { name: 'AS-2024S-TR',  description: 'Servidor rack 2U de doble socket AMD EPYC, diseñado para virtualización, aplicaciones de empresa y cargas intensivas de datos.', url: 'https://www.supermicro.com/en/products/system/Aplus/2U/AS-2024S-TR' }
        ]
    },
    mid_workstation_media: {
        baseTitle: 'Estaciones de Trabajo para Medios',
        title: 'Estaciones de Trabajo para Medios (Gama Media)',
        description: 'Servidores torre optimizados para creación de contenido 2D/3D, edición de audio/video y tareas de oficina intensivas.',
        icon: '🖥️',
        specs: { proc: 'Single AMD EPYC/Ryzen', mem: 'Hasta 192GB DDR5', storage: 'SATA, Múltiples PCIe 5.0', network: '1GbE' },
        tier: 'mid-range',
        models: [
            { name: 'AS-3015A-I', description: 'Servidor torre de socket único AMD, enfocado en creación de contenido 2D/3D y tareas empresariales de PYMEs.', url: 'https://www.supermicro.com/en/products/system/Mid-Tower/3015/AS-3015A-I' }
        ]
    },
    mid_financial_hpc: {
        baseTitle: 'Servidores Financieros de Baja Latencia',
        title: 'Servidores Financieros de Baja Latencia (Gama Media)',
        description: 'Plataformas para servicios financieros que requieren latencia de red optimizada para aplicaciones corporativas críticas.',
        icon: '📈',
        specs: { proc: 'Single AMD EPYC/Ryzen', mem: 'Hasta 128GB DDR5', storage: 'SATA/SAS Hot-swap, NVMe', network: 'Baja latencia validada' },
        tier: 'mid-range',
        models: [
            { name: 'AS-2015A-TR', description: 'Servidor rack 2U para CPU AMD Ryzen, orientado a empresas financieras, ofrece alto rendimiento y soporte de adaptadores de red de baja latencia.', url: 'https://www.supermicro.com/en/products/system/Mainstream/2U/AS-2015A-TR' }
        ]
    },
    mid_storage: {
        baseTitle: 'Servidores de Almacenamiento',
        title: 'Servidores de Almacenamiento (Gama Media)',
        description: 'Soluciones escalables y flexibles para archivos de medios masivos (MAM) y CDNs, con buena densidad de almacenamiento.',
        icon: '💾',
        specs: { proc: 'Intel Xeon, AMD EPYC', mem: 'Hasta 4TB DDR4', storage: 'All-Flash NVMe, Híbrido', network: 'Variable, hasta 25GbE' },
        tier: 'mid-range',
        models: [
            { name: 'SSG-2029P-E1CR24L', description: 'Servidor 2U "Simply Double" con 24 bahías 2.5" SAS/SATA, ideal para almacenamiento de alta densidad.', url: 'https://www.supermicro.com/products/system/2U/2029/SSG-2029P-E1CR24L.cfm' }
        ]
    },

    // Gama Alta (High-End)
    high_gpu: {
        baseTitle: 'Servidores GPU',
        title: 'Servidores GPU (Gama Alta)',
        description: 'Sistemas de máxima aceleración para IA, aprendizaje profundo, renderizado 3D complejo y HPC, con soporte para múltiples GPUs de doble ancho.',
        icon: '⚡',
        specs: { proc: 'Dual Intel Xeon Scalable, Dual AMD EPYC', mem: 'Hasta 9TB DDR4/HBM3e', storage: 'NVMe de alta velocidad', network: 'Hasta 400GbE InfiniBand/Ethernet' },
        tier: 'high-end',
        models: [
            { name: 'SYS-821GE-TNHR', description: 'Servidor 8U optimizado para IA y HPC con hasta 8 GPUs NVIDIA H100/H200, diseñado para el entrenamiento de modelos a gran escala.', url: 'https://www.supermicro.com/en/products/system/gpu/8u/sys-821ge-tnhr' },
            { name: 'SYS-421GE-TNRT', description: 'Servidor GPU 4U con procesadores Intel Xeon Scalable de 4ª/5ª generación, hasta 32 DIMMs y conectividad 10GbE, equilibrado para renderizado intensivo.', url: 'https://www.supermicro.com/en/products/system/gpu/4u/sys-421ge-tnrt' }
        ]
    },
    high_ultra: {
        baseTitle: 'Servidores Ultra',
        title: 'Servidores Ultra (Gama Alta)',
        description: 'Plataformas de rendimiento extremo para virtualización de misión crítica, bases de datos in-memory y cargas de trabajo de cómputo intensivo que exigen la menor latencia.',
        icon: '🚀',
        specs: { proc: 'Dual Intel Xeon Scalable (última gen), Dual AMD EPYC', mem: 'Hasta 12TB DDR5 (con PMem)', storage: 'NVMe Hot-swap de alta velocidad', network: '25GbE, 100GbE' },
        tier: 'high-end',
        models: [
            { name: 'SYS-221H-TNR', description: 'Servidor Ultra 2U con doble procesador Intel Xeon Scalable, alta capacidad de memoria y múltiples ranuras PCIe 5.0 para máxima expansión.', url: 'https://www.supermicro.com/en/products/system/hyper/2u/sys-221h-tnr' },
            { name: 'SYS-121H-TNR', description: 'Servidor Ultra 1U con doble procesador Intel Xeon Scalable, 16 DIMMs y 12 bahías 2.5" NVMe/SATA, versátil para virtualización y bases de datos.', url: 'https://www.supermicro.com/en/products/system/hyper/1u/sys-121h-tnr' }
        ]
    },
    high_twin: {
        baseTitle: 'Servidores Twin',
        title: 'Servidores Twin (Gama Alta)',
        description: 'Arquitecturas multinodo de densidad extrema para HPC, granjas de renderizado masivas y despliegues de nube a hiperescala, maximizando el cómputo por rack.',
        icon: '🧩',
        specs: { proc: 'Múltiples Intel Xeon/AMD EPYC por nodo', mem: 'Hasta 6TB DDR4/DDR5 por nodo', storage: 'NVMe/SAS3/SATA3 por nodo', network: '10GbE, 25GbE, 100GbE'  },
        tier: 'high-end',
        models: [
            { name: 'SYS-220GP-TNR', description: '2U Rackmount, cada uno con doble procesador Intel Xeon, ideal para despliegues de cómputo de alta densidad y HCI.', url: 'https://www.supermicro.com/en/products/system/BigTwin/2U/SYS-220GP-TNR' },
            { name: 'SYS-F622P-ACR', description: 'FatTwin 4U con hasta 8 nodos, ofreciendo una densidad de cómputo y almacenamiento sin precedentes para centros de datos a gran escala.', url: 'https://www.supermicro.com/en/products/system/FatTwin/4U/SYS-F622P-ACR' }
        ]
    },
    high_storage_petascale: {
        baseTitle: 'Servidores de Almacenamiento Petascale',
        title: 'Servidores de Almacenamiento Petascale (Gama Alta)',
        description: 'Soluciones de almacenamiento de objetos y archivos a gran escala, con capacidades de hasta petabytes y optimizadas para rendimiento NVMe all-flash.',
        icon: '🗄️',
        specs: { proc: 'Intel Xeon, AMD EPYC', mem: 'Hasta 4TB DDR4/DDR5', storage: 'Hasta 90 bahías 3.5" o All-Flash NVMe', network: '25GbE, 100GbE' },
        tier: 'high-end',
        models: [
            { name: 'SSG-6049P-E1CR60L', description: 'Servidor de almacenamiento 4U con 60 bahías de carga superior, diseñado para almacenamiento de objetos a escala de petabytes.', url: 'https://www.supermicro.com/en/products/system/4u/6049/ssg-6049p-e1cr60l.cfm' },
            { name: 'SSG-610P-ACR12N4L', description: 'Servidor de almacenamiento 1U All-Flash NVMe con 12 bahías U.2, ideal para bases de datos de alto rendimiento y almacenamiento de baja latencia.', url: 'https://www.supermicro.com/en/products/system/MegaDC/1U/SSG-610P-ACR12N4L' }
        ]
    },
    high_clouddc: {
        baseTitle: 'Servidores CloudDC',
        title: 'Servidores CloudDC (Gama Alta)',
        description: 'Plataformas optimizadas para infraestructuras de nube a escala de centro de datos, ofreciendo flexibilidad y eficiencia para IaaS y HPC en entornos de nube privada/híbrida.',
        icon: '☁️',
        specs: { proc: 'Dual Intel Xeon 6700/6500, Dual AMD EPYC', mem: 'Hasta 8 TB DDR5', storage: 'NVMe/SAS/SATA Hot-swap', network: '1GbE, AIOM Option, 25GbE+' },
        tier: 'high-end',
        models: [
            { name: 'SYS-621C-TN12R', description: 'Servidor CloudDC 2U con doble procesador Intel Xeon Scalable de 5ª/4ª generación, alta densidad de almacenamiento y opciones de red flexibles.', url: 'https://www.supermicro.com/en/products/system/CloudDC/2U/SYS-621C-TN12R' }
        ]
    },
    high_edge_telecom: {
        baseTitle: 'Servidores Edge & Telecom',
        title: 'Servidores Edge & Telecom (Gama Alta)',
        description: 'Sistemas robustos y de alto rendimiento para aplicaciones de telecomunicaciones y edge computing avanzadas, como 5G, inferencia de IA en el borde y procesamiento de datos en tiempo real.',
        icon: '🗼',
        specs: { proc: 'Intel Xeon D, AMD EPYC Embedded', mem: 'Hasta 512GB DDR4', storage: 'NVMe, SATA', network: '10GbE, 25GbE, 5G/Telecom' },
        tier: 'high-end',
        models: [
            { name: 'SYS-E403-12P-FN2T', description: 'Servidor Edge de alto rendimiento con soporte para GPUs, ideal para inferencia de IA y procesamiento de video en el borde.', url: 'https://www.supermicro.com/en/products/system/iot/box_pc/sys-e403-12p-fn2t' }
        ]
    }
};
