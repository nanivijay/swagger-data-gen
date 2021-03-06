import { Spec as Swagger } from 'swagger-schema-official';
/**
 * Takes in a Swagger / OpenAPI object and attempts to modify the defintions
 *
 * @param {object} api  - an Swagger / OpenAPI object to parse
 * @returns {object}    - a new Swagger / OpenAPI object with an updated definitions property;
 */
export declare const requireProps: (api: any) => Swagger;
