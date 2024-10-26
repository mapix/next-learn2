import type { AxiosInstance, AxiosRequestConfig } from "axios";
import useSWR, { type SWRConfiguration, type SWRResponse } from "swr";
export type AssignLeadWebRequest = {
    assignee: string;
};
export type AssignLeadWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: Lead | unknown;
};
export type AssignPolicy = "random" | "balance" | "round_robin";
export type BaseWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: any | unknown;
};
export type CandidateLeadSetWebRequest = {
    skip_duplicate?: boolean | unknown;
    remark?: string | unknown;
};
export type CandidateLeadSetWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: LeadSet | unknown;
};
export type ChangeStaffGroupWebRequest = {
    group_id: number;
};
export type ChangeStaffGroupWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: StaffView | unknown;
};
export type ChangeStaffPasswordWebRequest = {
    password: string;
};
export type ChangeStaffPasswordWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: StaffView | unknown;
};
export type CombinedToken = {
    access_token: string;
    tccc_token?: TcccToken | unknown;
};
export type CompleteLeadWebRequest = {
    category: string;
};
export type CompleteLeadWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: Lead | unknown;
};
export type CreateLeadSetWebRequest = {
    source: string;
    candidates: LeadCandidate[];
};
export type CreateLeadSetWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: LeadSet | unknown;
};
export type CreateLeadWebRequest = {
    name: string;
    phone: string;
    assignee?: string | unknown;
    remark?: string | unknown;
    ignore_duplicate?: boolean | unknown;
    lead_set_id: number;
};
export type CreateLeadWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: Lead | unknown;
};
export type CreateStaffGroupWebRequest = {
    name: string;
};
export type CreateStaffGroupWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: StaffGroup | unknown;
};
export type CreateStaffWebRequest = {
    name: string;
    phone: string;
    email: string;
    group_id: number;
    remark?: string | unknown;
};
export type CreateStaffWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: StaffView | unknown;
};
export type GetLeadSetWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: LeadSet | unknown;
};
export type GetLeadWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: Lead | unknown;
};
export type GetStaffGroupWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: StaffGroup | unknown;
};
export type GetStaffWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: StaffView | unknown;
};
export type HTTPValidationError = {
    detail?: ValidationError[];
};
export type Lead = {
    id?: number | unknown;
    created_by: string | unknown;
    created_at?: string;
    updated_by: string | unknown;
    updated_at?: string;
    deleted?: boolean;
    remark?: string | unknown;
    properties?: {};
    name: string;
    n_epoch?: number;
    lead_set_id: number;
    phone: string;
    status: string;
    assignee: string;
    assigned_by: string;
    assigned_at: string;
    completed_at: string;
    category: string;
};
export type LeadCandidate = {
    name: string;
    phone: string;
};
export type LeadSet = {
    id?: number | unknown;
    created_by: string | unknown;
    created_at?: string;
    updated_by: string | unknown;
    updated_at?: string;
    deleted?: boolean;
    remark?: string | unknown;
    properties?: {};
    source: string;
    status: string;
    n_leads?: number;
    n_invalid_leads?: number;
    n_skipped_leads?: number;
    n_unassigned_leads?: number;
    n_assigned_leads?: number;
    n_completed_leads?: number;
};
export type LeadStatus = "initial" | "skipped" | "invalid" | "unassigned" | "assigned" | "completed";
export type ListLeadSetsWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: LeadSet[] | unknown;
};
export type ListLeadsInLeadSetWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: Lead[] | unknown;
};
export type ListLeadsWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: Lead[] | unknown;
};
export type ListStaffGroupsWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: StaffGroup[] | unknown;
};
export type ListStaffsInGroupWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: StaffView[] | unknown;
};
export type ListStaffsWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: StaffView[] | unknown;
};
export type LoginWebRequest = {
    subject: string;
    password: string;
    super_admin?: boolean;
};
export type LoginWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: CombinedToken | unknown;
};
export type PatchStaffGroupWebRequest = {
    name?: string | unknown;
    remark?: string | unknown;
};
export type PatchStaffGroupWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: StaffGroup | unknown;
};
export type PatchStaffWebRequest = {
    name?: string | unknown;
    phone?: string | unknown;
    remark?: string | unknown;
};
export type PatchStaffWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: StaffView | unknown;
};
export type ScheduleLeadSetWebRequest = {
    assignee?: string | unknown;
    assignee_group?: string | unknown;
    assign_policy?: AssignPolicy | unknown;
    force_reassign?: boolean | unknown;
};
export type ScheduleLeadSetWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: LeadSet | unknown;
};
export type ServiceStatus = number;
export type StaffGroup = {
    id?: number | unknown;
    created_by: string | unknown;
    created_at?: string;
    updated_by: string | unknown;
    updated_at?: string;
    deleted?: boolean;
    remark?: string | unknown;
    properties?: {};
    name: string;
    n_staffs?: number;
    tccc_id: number | unknown;
};
export type StaffView = {
    id: number;
    name: string;
    email: string;
    phone: string;
    group_id: number;
    deleted: boolean;
    properties: {};
    created_by: string;
    created_at: string;
    updated_at: string;
    updated_by?: string | unknown;
    remark?: string | unknown;
};
export type TcccToken = {
    token: string;
    sdk_url: string;
    sdk_app_id: number;
    user_id: string;
};
export type UnassignLeadWebRequest = {};
export type UnassignLeadWebResponse = {
    status?: ServiceStatus | unknown;
    status_code?: number | unknown;
    error?: string | unknown;
    data?: Lead | unknown;
};
export type ValidationError = {
    loc: any[];
    msg: string;
    type: string;
};
export type AxiosConfig = {
    paramsSerializer?: AxiosRequestConfig["paramsSerializer"];
};
export type Config = {
    axios?: AxiosConfig;
};
export function initialize(axios: AxiosInstance, config?: Config) {
    const requests = makeRequests(axios, config?.axios);
    return {
        requests,
        queries: makeQueries(requests)
    };
}
function nullIfUndefined<T>(value: T): NonNullable<T> | null {
    return typeof value === "undefined" ? null : value as NonNullable<T> | null;
}
export const queryKeys = {
    listStaffGroupsApiStaffGroupsGet: (page?: number, page_size?: number) => ["listStaffGroupsApiStaffGroupsGet", nullIfUndefined(page), nullIfUndefined(page_size)] as const,
    getStaffGroupApiStaffGroupsStaffGroupIdGet: (staff_group_id: number) => ["getStaffGroupApiStaffGroupsStaffGroupIdGet", staff_group_id] as const,
    listStaffsInGroupApiStaffGroupsStaffGroupIdStaffsGet: (staff_group_id: number) => ["listStaffsInGroupApiStaffGroupsStaffGroupIdStaffsGet", staff_group_id] as const,
    listStaffsApiStaffsGet: (page?: number, page_size?: number) => ["listStaffsApiStaffsGet", nullIfUndefined(page), nullIfUndefined(page_size)] as const,
    getStaffApiStaffsStaffIdGet: (staff_id: number) => ["getStaffApiStaffsStaffIdGet", staff_id] as const,
    listLeadSetsApiLeadSetsGet: (page?: number, page_size?: number) => ["listLeadSetsApiLeadSetsGet", nullIfUndefined(page), nullIfUndefined(page_size)] as const,
    getLeadSetApiLeadSetsLeadSetIdGet: (lead_set_id: number) => ["getLeadSetApiLeadSetsLeadSetIdGet", lead_set_id] as const,
    listLeadsInLeadSetApiLeadSetsLeadSetIdLeadsGet: (lead_set_id: number, page?: number, page_size?: number, status?: LeadStatus[] | unknown) => ["listLeadsInLeadSetApiLeadSetsLeadSetIdLeadsGet", lead_set_id, nullIfUndefined(page), nullIfUndefined(page_size), nullIfUndefined(status)] as const,
    listLeadsApiLeadsGet: (page?: number, page_size?: number) => ["listLeadsApiLeadsGet", nullIfUndefined(page), nullIfUndefined(page_size)] as const,
    getLeadApiLeadsLeadIdGet: (lead_id: number) => ["getLeadApiLeadsLeadIdGet", lead_id] as const,
    healthHealthGet: () => ["healthHealthGet"] as const
} as const;
export type QueryKeys = typeof queryKeys;
function makeRequests(axios: AxiosInstance, config?: AxiosConfig) {
    return {
        listStaffGroupsApiStaffGroupsGet: (page?: number, page_size?: number) => axios.request<ListStaffGroupsWebResponse>({
            method: "get",
            url: `/api/staff-groups/`,
            params: {
                ...(page !== undefined ? { page } : undefined),
                ...(page_size !== undefined ? { page_size } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        createStaffGroupApiStaffGroupsPost: (payload: CreateStaffGroupWebRequest) => axios.request<CreateStaffGroupWebResponse>({
            method: "post",
            url: `/api/staff-groups/`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        getStaffGroupApiStaffGroupsStaffGroupIdGet: (staff_group_id: number) => axios.request<GetStaffGroupWebResponse>({
            method: "get",
            url: `/api/staff-groups/${staff_group_id}`
        }).then(res => res.data),
        deleteStaffGroupApiStaffGroupsStaffGroupIdDelete: (staff_group_id: number) => axios.request<BaseWebResponse>({
            method: "delete",
            url: `/api/staff-groups/${staff_group_id}`
        }).then(res => res.data),
        patchStaffGroupApiStaffGroupsStaffGroupIdPatch: (payload: PatchStaffGroupWebRequest, staff_group_id: number) => axios.request<PatchStaffGroupWebResponse>({
            method: "patch",
            url: `/api/staff-groups/${staff_group_id}`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        listStaffsInGroupApiStaffGroupsStaffGroupIdStaffsGet: (staff_group_id: number) => axios.request<ListStaffsInGroupWebResponse>({
            method: "get",
            url: `/api/staff-groups/${staff_group_id}/staffs`
        }).then(res => res.data),
        listStaffsApiStaffsGet: (page?: number, page_size?: number) => axios.request<ListStaffsWebResponse>({
            method: "get",
            url: `/api/staffs/`,
            params: {
                ...(page !== undefined ? { page } : undefined),
                ...(page_size !== undefined ? { page_size } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        createStaffApiStaffsPost: (payload: CreateStaffWebRequest) => axios.request<CreateStaffWebResponse>({
            method: "post",
            url: `/api/staffs/`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        getStaffApiStaffsStaffIdGet: (staff_id: number) => axios.request<GetStaffWebResponse>({
            method: "get",
            url: `/api/staffs/${staff_id}`
        }).then(res => res.data),
        deleteStaffApiStaffsStaffIdDelete: (staff_id: number) => axios.request<BaseWebResponse>({
            method: "delete",
            url: `/api/staffs/${staff_id}`
        }).then(res => res.data),
        patchStaffApiStaffsStaffIdPatch: (payload: PatchStaffWebRequest, staff_id: number) => axios.request<PatchStaffWebResponse>({
            method: "patch",
            url: `/api/staffs/${staff_id}`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        changeStaffPasswordApiStaffsStaffIdChangePasswordPost: (payload: ChangeStaffPasswordWebRequest, staff_id: number) => axios.request<ChangeStaffPasswordWebResponse>({
            method: "post",
            url: `/api/staffs/${staff_id}/change-password`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        changeStaffGroupApiStaffsStaffIdChangeGroupPost: (payload: ChangeStaffGroupWebRequest, staff_id: number) => axios.request<ChangeStaffGroupWebResponse>({
            method: "post",
            url: `/api/staffs/${staff_id}/change-group`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        listLeadSetsApiLeadSetsGet: (page?: number, page_size?: number) => axios.request<ListLeadSetsWebResponse>({
            method: "get",
            url: `/api/lead-sets/`,
            params: {
                ...(page !== undefined ? { page } : undefined),
                ...(page_size !== undefined ? { page_size } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        createLeadSetApiLeadSetsPost: (payload: CreateLeadSetWebRequest) => axios.request<CreateLeadSetWebResponse>({
            method: "post",
            url: `/api/lead-sets/`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        getLeadSetApiLeadSetsLeadSetIdGet: (lead_set_id: number) => axios.request<GetLeadSetWebResponse>({
            method: "get",
            url: `/api/lead-sets/${lead_set_id}`
        }).then(res => res.data),
        deleteLeadSetApiLeadSetsLeadSetIdDelete: (lead_set_id: number) => axios.request<BaseWebResponse>({
            method: "delete",
            url: `/api/lead-sets/${lead_set_id}`
        }).then(res => res.data),
        candidateLeadSetApiLeadSetsLeadSetIdCandidatesPost: (payload: CandidateLeadSetWebRequest, lead_set_id: number) => axios.request<CandidateLeadSetWebResponse>({
            method: "post",
            url: `/api/lead-sets/${lead_set_id}/candidates`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        scheduleLeadSetApiLeadSetsLeadSetIdSchedulePost: (payload: ScheduleLeadSetWebRequest, lead_set_id: number) => axios.request<ScheduleLeadSetWebResponse>({
            method: "post",
            url: `/api/lead-sets/${lead_set_id}/schedule`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        listLeadsInLeadSetApiLeadSetsLeadSetIdLeadsGet: (lead_set_id: number, page?: number, page_size?: number, status?: LeadStatus[] | unknown) => axios.request<ListLeadsInLeadSetWebResponse>({
            method: "get",
            url: `/api/lead-sets/${lead_set_id}/leads`,
            params: {
                ...(page !== undefined ? { page } : undefined),
                ...(page_size !== undefined ? { page_size } : undefined),
                ...(status !== undefined ? { status } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        listLeadsApiLeadsGet: (page?: number, page_size?: number) => axios.request<ListLeadsWebResponse>({
            method: "get",
            url: `/api/leads/`,
            params: {
                ...(page !== undefined ? { page } : undefined),
                ...(page_size !== undefined ? { page_size } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        createLeadApiLeadsPost: (payload: CreateLeadWebRequest) => axios.request<CreateLeadWebResponse>({
            method: "post",
            url: `/api/leads/`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        getLeadApiLeadsLeadIdGet: (lead_id: number) => axios.request<GetLeadWebResponse>({
            method: "get",
            url: `/api/leads/${lead_id}`
        }).then(res => res.data),
        deleteLeadApiLeadsLeadIdDelete: (lead_id: number) => axios.request<BaseWebResponse>({
            method: "delete",
            url: `/api/leads/${lead_id}`
        }).then(res => res.data),
        assignLeadApiLeadsLeadIdAssignPost: (payload: AssignLeadWebRequest, lead_id: number) => axios.request<AssignLeadWebResponse>({
            method: "post",
            url: `/api/leads/${lead_id}/assign`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        unassignLeadApiLeadsLeadIdUnassignPost: (payload: UnassignLeadWebRequest, lead_id: number) => axios.request<UnassignLeadWebResponse>({
            method: "post",
            url: `/api/leads/${lead_id}/unassign`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        completeLeadApiLeadsLeadIdCompletePost: (payload: CompleteLeadWebRequest, lead_id: number) => axios.request<CompleteLeadWebResponse>({
            method: "post",
            url: `/api/leads/${lead_id}/complete`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        loginApiAuthLoginPost: (payload: LoginWebRequest) => axios.request<LoginWebResponse>({
            method: "post",
            url: `/api/auth/login`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        healthHealthGet: () => axios.request<any>({
            method: "get",
            url: `/health`
        }).then(res => res.data)
    } as const;
}
export type Requests = ReturnType<typeof makeRequests>;
export type Response<T extends keyof Requests> = Awaited<ReturnType<Requests[T]>>;
function makeQueries(requests: Requests) {
    return {
        useListStaffGroupsApiStaffGroupsGet: (page?: number, page_size?: number, options?: SWRConfiguration<Response<"listStaffGroupsApiStaffGroupsGet">, unknown>): SWRResponse<Response<"listStaffGroupsApiStaffGroupsGet">, unknown> => useSWR(queryKeys.listStaffGroupsApiStaffGroupsGet(page, page_size), () => requests.listStaffGroupsApiStaffGroupsGet(page, page_size), options),
        useGetStaffGroupApiStaffGroupsStaffGroupIdGet: (staff_group_id: number, options?: SWRConfiguration<Response<"getStaffGroupApiStaffGroupsStaffGroupIdGet">, unknown>): SWRResponse<Response<"getStaffGroupApiStaffGroupsStaffGroupIdGet">, unknown> => useSWR(queryKeys.getStaffGroupApiStaffGroupsStaffGroupIdGet(staff_group_id), () => requests.getStaffGroupApiStaffGroupsStaffGroupIdGet(staff_group_id), options),
        useListStaffsInGroupApiStaffGroupsStaffGroupIdStaffsGet: (staff_group_id: number, options?: SWRConfiguration<Response<"listStaffsInGroupApiStaffGroupsStaffGroupIdStaffsGet">, unknown>): SWRResponse<Response<"listStaffsInGroupApiStaffGroupsStaffGroupIdStaffsGet">, unknown> => useSWR(queryKeys.listStaffsInGroupApiStaffGroupsStaffGroupIdStaffsGet(staff_group_id), () => requests.listStaffsInGroupApiStaffGroupsStaffGroupIdStaffsGet(staff_group_id), options),
        useListStaffsApiStaffsGet: (page?: number, page_size?: number, options?: SWRConfiguration<Response<"listStaffsApiStaffsGet">, unknown>): SWRResponse<Response<"listStaffsApiStaffsGet">, unknown> => useSWR(queryKeys.listStaffsApiStaffsGet(page, page_size), () => requests.listStaffsApiStaffsGet(page, page_size), options),
        useGetStaffApiStaffsStaffIdGet: (staff_id: number, options?: SWRConfiguration<Response<"getStaffApiStaffsStaffIdGet">, unknown>): SWRResponse<Response<"getStaffApiStaffsStaffIdGet">, unknown> => useSWR(queryKeys.getStaffApiStaffsStaffIdGet(staff_id), () => requests.getStaffApiStaffsStaffIdGet(staff_id), options),
        useListLeadSetsApiLeadSetsGet: (page?: number, page_size?: number, options?: SWRConfiguration<Response<"listLeadSetsApiLeadSetsGet">, unknown>): SWRResponse<Response<"listLeadSetsApiLeadSetsGet">, unknown> => useSWR(queryKeys.listLeadSetsApiLeadSetsGet(page, page_size), () => requests.listLeadSetsApiLeadSetsGet(page, page_size), options),
        useGetLeadSetApiLeadSetsLeadSetIdGet: (lead_set_id: number, options?: SWRConfiguration<Response<"getLeadSetApiLeadSetsLeadSetIdGet">, unknown>): SWRResponse<Response<"getLeadSetApiLeadSetsLeadSetIdGet">, unknown> => useSWR(queryKeys.getLeadSetApiLeadSetsLeadSetIdGet(lead_set_id), () => requests.getLeadSetApiLeadSetsLeadSetIdGet(lead_set_id), options),
        useListLeadsInLeadSetApiLeadSetsLeadSetIdLeadsGet: (lead_set_id: number, page?: number, page_size?: number, status?: LeadStatus[] | unknown, options?: SWRConfiguration<Response<"listLeadsInLeadSetApiLeadSetsLeadSetIdLeadsGet">, unknown>): SWRResponse<Response<"listLeadsInLeadSetApiLeadSetsLeadSetIdLeadsGet">, unknown> => useSWR(queryKeys.listLeadsInLeadSetApiLeadSetsLeadSetIdLeadsGet(lead_set_id, page, page_size, status), () => requests.listLeadsInLeadSetApiLeadSetsLeadSetIdLeadsGet(lead_set_id, page, page_size, status), options),
        useListLeadsApiLeadsGet: (page?: number, page_size?: number, options?: SWRConfiguration<Response<"listLeadsApiLeadsGet">, unknown>): SWRResponse<Response<"listLeadsApiLeadsGet">, unknown> => useSWR(queryKeys.listLeadsApiLeadsGet(page, page_size), () => requests.listLeadsApiLeadsGet(page, page_size), options),
        useGetLeadApiLeadsLeadIdGet: (lead_id: number, options?: SWRConfiguration<Response<"getLeadApiLeadsLeadIdGet">, unknown>): SWRResponse<Response<"getLeadApiLeadsLeadIdGet">, unknown> => useSWR(queryKeys.getLeadApiLeadsLeadIdGet(lead_id), () => requests.getLeadApiLeadsLeadIdGet(lead_id), options),
        useHealthHealthGet: (options?: SWRConfiguration<Response<"healthHealthGet">, unknown>): SWRResponse<Response<"healthHealthGet">, unknown> => useSWR(queryKeys.healthHealthGet(), () => requests.healthHealthGet(), options)
    } as const;
}
