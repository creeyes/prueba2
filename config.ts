// src/config.ts

// 1. URL de tu Backend en Railway
// (Le quitamos la barra al final para evitar errores de doble barra //)
export const API_BASE_URL = 'https://web-production-2573f.up.railway.app';

// 2. ID de la Subcuenta de GHL (Location ID)
export const AGENCIA_ID = 'Qqg3dS8LsYYc0QQGEfVZ';

// 3. Endpoints listos para usar en los componentes
export const ENDPOINTS = {
    // Listado: Trae todas las propiedades activas de esta agencia
    PROPERTIES: `${API_BASE_URL}/front/api/properties/?agency_id=${AGENCIA_ID}`,

    // Detalle: Trae una propiedad específica por su ID
    DETAIL: (id: string) => `${API_BASE_URL}/front/api/properties/${id}/`
};
