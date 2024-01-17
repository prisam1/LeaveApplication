import apiConfig from './config';

export const employeeRegister = (payload: any) =>
    apiConfig.client.post(`/EmpResignationInsData `, payload);

export const employeePersonalinsert = (payload: any) =>
    apiConfig.client.post(`/EmployeePersonalDetailsInsData`, payload);

export const employeeEducationinsert = (payload: any) =>
    apiConfig.client.post(`/EmpEducationdetailsInsData`, payload);

export const employeeExperinceinsert = (payload: any) =>
    apiConfig.client.post(`/EmpExperienceDetailsInsData`, payload);
    
export const employeeDocumentinsert = (payload: any) =>
    apiConfig.client.post(`/EmpDocumentdetailsInsData`, payload);    





 