import { InjectionKey } from 'vue-demi'
import { Schema } from '@formily/json-schema'
import { ISchemaFieldFactoryOptions } from '../types'
export const FormSymbol: InjectionKey<Formily.Core.Models.Form> = Symbol('form')
export const FieldSymbol: InjectionKey<Formily.Core.Types.GeneralField> = Symbol('field')
export const SchemaMarkupSymbol: InjectionKey<Schema> = Symbol('schemaMarkup')
export const SchemaSymbol: InjectionKey<Schema> = Symbol('schema')
export const SchemaExpressionScopeSymbol: InjectionKey<any> = Symbol('schemaExpression')
export const SchemaOptionsSymbol: InjectionKey<ISchemaFieldFactoryOptions> = Symbol('schemaOptions')
