import apiConfig from './config';

export const leavestatus = (payload: any) =>
    apiConfig.client.post(`/LeaveDetailsData`, payload);

export const LeaveDetails = (payload: any) =>
    apiConfig.client.post(`/LeaveMasterData`, payload);

export const insertLeaveData = (payload: any) =>
    apiConfig.client.post(`/LeaveDetailsInsData `, payload);

export const LeaveDetail = (leaveId: string) =>
    apiConfig.client.post(`/LeaveDetailsUpData`);        
  
 
    
