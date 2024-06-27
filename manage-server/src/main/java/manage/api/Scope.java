package manage.api;

public enum Scope {

    ADMIN, //Standard scope for all GUI related endpoint (e.g. /manage/api/client/** endpoints)
    CHANGE_REQUEST_IDP, //Allowed to create change requests for IdP
    CHANGE_REQUEST_SP, //Allowed to create change requests for SP
    POLICIES, //Allowed to create (excluding Identity Providers) and update all entities
    PUSH, //Allowed to push changes to EB & OIDC-NG
    READ, //Allowed to read entities
    SYSTEM, //Allowed everything including Attribute Manipulation
    TEST, //Only used internally
    WRITE_SP, //Allowed to CRU SP / RP / RS / SRAM
    DELETE_SP, //Allowed to Delete SP / RP / RS
    WRITE_IDP //Allowed to CRUD IdP

}
