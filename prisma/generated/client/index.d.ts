
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model UserModel
 * 
 */
export type UserModel = {
  id: number
  email: string
  password: string
  name: string
}

/**
 * Model UserConnections
 * 
 */
export type UserConnections = {
  id: number
  browser: string
  os: string
  device: string
  country: string
  ip: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserModels
 * const userModels = await prisma.userModel.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserModels
   * const userModels = await prisma.userModel.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.userModel`: Exposes CRUD operations for the **UserModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserModels
    * const userModels = await prisma.userModel.findMany()
    * ```
    */
  get userModel(): Prisma.UserModelDelegate<GlobalReject>;

  /**
   * `prisma.userConnections`: Exposes CRUD operations for the **UserConnections** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserConnections
    * const userConnections = await prisma.userConnections.findMany()
    * ```
    */
  get userConnections(): Prisma.UserConnectionsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Extensions
   */
  export type Extension = runtime.Extension 

  /**
   * Prisma Client JS version: 4.5.0
   * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    UserModel: 'UserModel',
    UserConnections: 'UserConnections'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model UserModel
   */


  export type AggregateUserModel = {
    _count: UserModelCountAggregateOutputType | null
    _avg: UserModelAvgAggregateOutputType | null
    _sum: UserModelSumAggregateOutputType | null
    _min: UserModelMinAggregateOutputType | null
    _max: UserModelMaxAggregateOutputType | null
  }

  export type UserModelAvgAggregateOutputType = {
    id: number | null
  }

  export type UserModelSumAggregateOutputType = {
    id: number | null
  }

  export type UserModelMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type UserModelMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type UserModelCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    _all: number
  }


  export type UserModelAvgAggregateInputType = {
    id?: true
  }

  export type UserModelSumAggregateInputType = {
    id?: true
  }

  export type UserModelMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type UserModelMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type UserModelCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    _all?: true
  }

  export type UserModelAggregateArgs = {
    /**
     * Filter which UserModel to aggregate.
     * 
    **/
    where?: UserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModels to fetch.
     * 
    **/
    orderBy?: Enumerable<UserModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserModels
    **/
    _count?: true | UserModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserModelMaxAggregateInputType
  }

  export type GetUserModelAggregateType<T extends UserModelAggregateArgs> = {
        [P in keyof T & keyof AggregateUserModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserModel[P]>
      : GetScalarType<T[P], AggregateUserModel[P]>
  }




  export type UserModelGroupByArgs = {
    where?: UserModelWhereInput
    orderBy?: Enumerable<UserModelOrderByWithAggregationInput>
    by: Array<UserModelScalarFieldEnum>
    having?: UserModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserModelCountAggregateInputType | true
    _avg?: UserModelAvgAggregateInputType
    _sum?: UserModelSumAggregateInputType
    _min?: UserModelMinAggregateInputType
    _max?: UserModelMaxAggregateInputType
  }


  export type UserModelGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    _count: UserModelCountAggregateOutputType | null
    _avg: UserModelAvgAggregateOutputType | null
    _sum: UserModelSumAggregateOutputType | null
    _min: UserModelMinAggregateOutputType | null
    _max: UserModelMaxAggregateOutputType | null
  }

  type GetUserModelGroupByPayload<T extends UserModelGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserModelGroupByOutputType[P]>
            : GetScalarType<T[P], UserModelGroupByOutputType[P]>
        }
      >
    >


  export type UserModelSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }

  export type UserModelGetPayload<
    S extends boolean | null | undefined | UserModelArgs,
    U = keyof S
      > = S extends true
        ? UserModel
    : S extends undefined
    ? never
    : S extends UserModelArgs | UserModelFindManyArgs
    ?'include' extends U
    ? UserModel 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserModel ? UserModel[P] : never
  } 
    : UserModel
  : UserModel


  type UserModelCountArgs = Merge<
    Omit<UserModelFindManyArgs, 'select' | 'include'> & {
      select?: UserModelCountAggregateInputType | true
    }
  >

  export interface UserModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one UserModel that matches the filter.
     * @param {UserModelFindUniqueArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserModel'> extends True ? CheckSelect<T, Prisma__UserModelClient<UserModel>, Prisma__UserModelClient<UserModelGetPayload<T>>> : CheckSelect<T, Prisma__UserModelClient<UserModel | null, null>, Prisma__UserModelClient<UserModelGetPayload<T> | null, null>>

    /**
     * Find the first UserModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelFindFirstArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserModel'> extends True ? CheckSelect<T, Prisma__UserModelClient<UserModel>, Prisma__UserModelClient<UserModelGetPayload<T>>> : CheckSelect<T, Prisma__UserModelClient<UserModel | null, null>, Prisma__UserModelClient<UserModelGetPayload<T> | null, null>>

    /**
     * Find zero or more UserModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserModels
     * const userModels = await prisma.userModel.findMany()
     * 
     * // Get first 10 UserModels
     * const userModels = await prisma.userModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userModelWithIdOnly = await prisma.userModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserModelFindManyArgs>(
      args?: SelectSubset<T, UserModelFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserModel>>, PrismaPromise<Array<UserModelGetPayload<T>>>>

    /**
     * Create a UserModel.
     * @param {UserModelCreateArgs} args - Arguments to create a UserModel.
     * @example
     * // Create one UserModel
     * const UserModel = await prisma.userModel.create({
     *   data: {
     *     // ... data to create a UserModel
     *   }
     * })
     * 
    **/
    create<T extends UserModelCreateArgs>(
      args: SelectSubset<T, UserModelCreateArgs>
    ): CheckSelect<T, Prisma__UserModelClient<UserModel>, Prisma__UserModelClient<UserModelGetPayload<T>>>

    /**
     * Delete a UserModel.
     * @param {UserModelDeleteArgs} args - Arguments to delete one UserModel.
     * @example
     * // Delete one UserModel
     * const UserModel = await prisma.userModel.delete({
     *   where: {
     *     // ... filter to delete one UserModel
     *   }
     * })
     * 
    **/
    delete<T extends UserModelDeleteArgs>(
      args: SelectSubset<T, UserModelDeleteArgs>
    ): CheckSelect<T, Prisma__UserModelClient<UserModel>, Prisma__UserModelClient<UserModelGetPayload<T>>>

    /**
     * Update one UserModel.
     * @param {UserModelUpdateArgs} args - Arguments to update one UserModel.
     * @example
     * // Update one UserModel
     * const userModel = await prisma.userModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserModelUpdateArgs>(
      args: SelectSubset<T, UserModelUpdateArgs>
    ): CheckSelect<T, Prisma__UserModelClient<UserModel>, Prisma__UserModelClient<UserModelGetPayload<T>>>

    /**
     * Delete zero or more UserModels.
     * @param {UserModelDeleteManyArgs} args - Arguments to filter UserModels to delete.
     * @example
     * // Delete a few UserModels
     * const { count } = await prisma.userModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserModelDeleteManyArgs>(
      args?: SelectSubset<T, UserModelDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserModels
     * const userModel = await prisma.userModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserModelUpdateManyArgs>(
      args: SelectSubset<T, UserModelUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserModel.
     * @param {UserModelUpsertArgs} args - Arguments to update or create a UserModel.
     * @example
     * // Update or create a UserModel
     * const userModel = await prisma.userModel.upsert({
     *   create: {
     *     // ... data to create a UserModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserModel we want to update
     *   }
     * })
    **/
    upsert<T extends UserModelUpsertArgs>(
      args: SelectSubset<T, UserModelUpsertArgs>
    ): CheckSelect<T, Prisma__UserModelClient<UserModel>, Prisma__UserModelClient<UserModelGetPayload<T>>>

    /**
     * Find one UserModel that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserModelFindUniqueOrThrowArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserModelFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserModelClient<UserModel>, Prisma__UserModelClient<UserModelGetPayload<T>>>

    /**
     * Find the first UserModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelFindFirstOrThrowArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserModelFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserModelClient<UserModel>, Prisma__UserModelClient<UserModelGetPayload<T>>>

    /**
     * Count the number of UserModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelCountArgs} args - Arguments to filter UserModels to count.
     * @example
     * // Count the number of UserModels
     * const count = await prisma.userModel.count({
     *   where: {
     *     // ... the filter for the UserModels we want to count
     *   }
     * })
    **/
    count<T extends UserModelCountArgs>(
      args?: Subset<T, UserModelCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserModelAggregateArgs>(args: Subset<T, UserModelAggregateArgs>): PrismaPromise<GetUserModelAggregateType<T>>

    /**
     * Group by UserModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserModelGroupByArgs['orderBy'] }
        : { orderBy?: UserModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserModelGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserModelClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserModel base type for findUnique actions
   */
  export type UserModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserModel
     * 
    **/
    select?: UserModelSelect | null
    /**
     * Filter, which UserModel to fetch.
     * 
    **/
    where: UserModelWhereUniqueInput
  }

  /**
   * UserModel: findUnique
   */
  export interface UserModelFindUniqueArgs extends UserModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserModel base type for findFirst actions
   */
  export type UserModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserModel
     * 
    **/
    select?: UserModelSelect | null
    /**
     * Filter, which UserModel to fetch.
     * 
    **/
    where?: UserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModels to fetch.
     * 
    **/
    orderBy?: Enumerable<UserModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModels.
     * 
    **/
    cursor?: UserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModels.
     * 
    **/
    distinct?: Enumerable<UserModelScalarFieldEnum>
  }

  /**
   * UserModel: findFirst
   */
  export interface UserModelFindFirstArgs extends UserModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserModel findMany
   */
  export type UserModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     * 
    **/
    select?: UserModelSelect | null
    /**
     * Filter, which UserModels to fetch.
     * 
    **/
    where?: UserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModels to fetch.
     * 
    **/
    orderBy?: Enumerable<UserModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserModels.
     * 
    **/
    cursor?: UserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModels.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserModelScalarFieldEnum>
  }


  /**
   * UserModel create
   */
  export type UserModelCreateArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     * 
    **/
    select?: UserModelSelect | null
    /**
     * The data needed to create a UserModel.
     * 
    **/
    data: XOR<UserModelCreateInput, UserModelUncheckedCreateInput>
  }


  /**
   * UserModel update
   */
  export type UserModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     * 
    **/
    select?: UserModelSelect | null
    /**
     * The data needed to update a UserModel.
     * 
    **/
    data: XOR<UserModelUpdateInput, UserModelUncheckedUpdateInput>
    /**
     * Choose, which UserModel to update.
     * 
    **/
    where: UserModelWhereUniqueInput
  }


  /**
   * UserModel updateMany
   */
  export type UserModelUpdateManyArgs = {
    /**
     * The data used to update UserModels.
     * 
    **/
    data: XOR<UserModelUpdateManyMutationInput, UserModelUncheckedUpdateManyInput>
    /**
     * Filter which UserModels to update
     * 
    **/
    where?: UserModelWhereInput
  }


  /**
   * UserModel upsert
   */
  export type UserModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     * 
    **/
    select?: UserModelSelect | null
    /**
     * The filter to search for the UserModel to update in case it exists.
     * 
    **/
    where: UserModelWhereUniqueInput
    /**
     * In case the UserModel found by the `where` argument doesn't exist, create a new UserModel with this data.
     * 
    **/
    create: XOR<UserModelCreateInput, UserModelUncheckedCreateInput>
    /**
     * In case the UserModel was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserModelUpdateInput, UserModelUncheckedUpdateInput>
  }


  /**
   * UserModel delete
   */
  export type UserModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     * 
    **/
    select?: UserModelSelect | null
    /**
     * Filter which UserModel to delete.
     * 
    **/
    where: UserModelWhereUniqueInput
  }


  /**
   * UserModel deleteMany
   */
  export type UserModelDeleteManyArgs = {
    /**
     * Filter which UserModels to delete
     * 
    **/
    where?: UserModelWhereInput
  }


  /**
   * UserModel: findUniqueOrThrow
   */
  export type UserModelFindUniqueOrThrowArgs = UserModelFindUniqueArgsBase
      

  /**
   * UserModel: findFirstOrThrow
   */
  export type UserModelFindFirstOrThrowArgs = UserModelFindFirstArgsBase
      

  /**
   * UserModel without action
   */
  export type UserModelArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     * 
    **/
    select?: UserModelSelect | null
  }



  /**
   * Model UserConnections
   */


  export type AggregateUserConnections = {
    _count: UserConnectionsCountAggregateOutputType | null
    _avg: UserConnectionsAvgAggregateOutputType | null
    _sum: UserConnectionsSumAggregateOutputType | null
    _min: UserConnectionsMinAggregateOutputType | null
    _max: UserConnectionsMaxAggregateOutputType | null
  }

  export type UserConnectionsAvgAggregateOutputType = {
    id: number | null
  }

  export type UserConnectionsSumAggregateOutputType = {
    id: number | null
  }

  export type UserConnectionsMinAggregateOutputType = {
    id: number | null
    browser: string | null
    os: string | null
    device: string | null
    country: string | null
    ip: string | null
  }

  export type UserConnectionsMaxAggregateOutputType = {
    id: number | null
    browser: string | null
    os: string | null
    device: string | null
    country: string | null
    ip: string | null
  }

  export type UserConnectionsCountAggregateOutputType = {
    id: number
    browser: number
    os: number
    device: number
    country: number
    ip: number
    _all: number
  }


  export type UserConnectionsAvgAggregateInputType = {
    id?: true
  }

  export type UserConnectionsSumAggregateInputType = {
    id?: true
  }

  export type UserConnectionsMinAggregateInputType = {
    id?: true
    browser?: true
    os?: true
    device?: true
    country?: true
    ip?: true
  }

  export type UserConnectionsMaxAggregateInputType = {
    id?: true
    browser?: true
    os?: true
    device?: true
    country?: true
    ip?: true
  }

  export type UserConnectionsCountAggregateInputType = {
    id?: true
    browser?: true
    os?: true
    device?: true
    country?: true
    ip?: true
    _all?: true
  }

  export type UserConnectionsAggregateArgs = {
    /**
     * Filter which UserConnections to aggregate.
     * 
    **/
    where?: UserConnectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserConnections to fetch.
     * 
    **/
    orderBy?: Enumerable<UserConnectionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserConnectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserConnections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserConnections.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserConnections
    **/
    _count?: true | UserConnectionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserConnectionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserConnectionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserConnectionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserConnectionsMaxAggregateInputType
  }

  export type GetUserConnectionsAggregateType<T extends UserConnectionsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserConnections]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserConnections[P]>
      : GetScalarType<T[P], AggregateUserConnections[P]>
  }




  export type UserConnectionsGroupByArgs = {
    where?: UserConnectionsWhereInput
    orderBy?: Enumerable<UserConnectionsOrderByWithAggregationInput>
    by: Array<UserConnectionsScalarFieldEnum>
    having?: UserConnectionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserConnectionsCountAggregateInputType | true
    _avg?: UserConnectionsAvgAggregateInputType
    _sum?: UserConnectionsSumAggregateInputType
    _min?: UserConnectionsMinAggregateInputType
    _max?: UserConnectionsMaxAggregateInputType
  }


  export type UserConnectionsGroupByOutputType = {
    id: number
    browser: string
    os: string
    device: string
    country: string
    ip: string
    _count: UserConnectionsCountAggregateOutputType | null
    _avg: UserConnectionsAvgAggregateOutputType | null
    _sum: UserConnectionsSumAggregateOutputType | null
    _min: UserConnectionsMinAggregateOutputType | null
    _max: UserConnectionsMaxAggregateOutputType | null
  }

  type GetUserConnectionsGroupByPayload<T extends UserConnectionsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserConnectionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserConnectionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserConnectionsGroupByOutputType[P]>
            : GetScalarType<T[P], UserConnectionsGroupByOutputType[P]>
        }
      >
    >


  export type UserConnectionsSelect = {
    id?: boolean
    browser?: boolean
    os?: boolean
    device?: boolean
    country?: boolean
    ip?: boolean
  }

  export type UserConnectionsGetPayload<
    S extends boolean | null | undefined | UserConnectionsArgs,
    U = keyof S
      > = S extends true
        ? UserConnections
    : S extends undefined
    ? never
    : S extends UserConnectionsArgs | UserConnectionsFindManyArgs
    ?'include' extends U
    ? UserConnections 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserConnections ? UserConnections[P] : never
  } 
    : UserConnections
  : UserConnections


  type UserConnectionsCountArgs = Merge<
    Omit<UserConnectionsFindManyArgs, 'select' | 'include'> & {
      select?: UserConnectionsCountAggregateInputType | true
    }
  >

  export interface UserConnectionsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one UserConnections that matches the filter.
     * @param {UserConnectionsFindUniqueArgs} args - Arguments to find a UserConnections
     * @example
     * // Get one UserConnections
     * const userConnections = await prisma.userConnections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserConnectionsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserConnectionsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserConnections'> extends True ? CheckSelect<T, Prisma__UserConnectionsClient<UserConnections>, Prisma__UserConnectionsClient<UserConnectionsGetPayload<T>>> : CheckSelect<T, Prisma__UserConnectionsClient<UserConnections | null, null>, Prisma__UserConnectionsClient<UserConnectionsGetPayload<T> | null, null>>

    /**
     * Find the first UserConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConnectionsFindFirstArgs} args - Arguments to find a UserConnections
     * @example
     * // Get one UserConnections
     * const userConnections = await prisma.userConnections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserConnectionsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserConnectionsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserConnections'> extends True ? CheckSelect<T, Prisma__UserConnectionsClient<UserConnections>, Prisma__UserConnectionsClient<UserConnectionsGetPayload<T>>> : CheckSelect<T, Prisma__UserConnectionsClient<UserConnections | null, null>, Prisma__UserConnectionsClient<UserConnectionsGetPayload<T> | null, null>>

    /**
     * Find zero or more UserConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConnectionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserConnections
     * const userConnections = await prisma.userConnections.findMany()
     * 
     * // Get first 10 UserConnections
     * const userConnections = await prisma.userConnections.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userConnectionsWithIdOnly = await prisma.userConnections.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserConnectionsFindManyArgs>(
      args?: SelectSubset<T, UserConnectionsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserConnections>>, PrismaPromise<Array<UserConnectionsGetPayload<T>>>>

    /**
     * Create a UserConnections.
     * @param {UserConnectionsCreateArgs} args - Arguments to create a UserConnections.
     * @example
     * // Create one UserConnections
     * const UserConnections = await prisma.userConnections.create({
     *   data: {
     *     // ... data to create a UserConnections
     *   }
     * })
     * 
    **/
    create<T extends UserConnectionsCreateArgs>(
      args: SelectSubset<T, UserConnectionsCreateArgs>
    ): CheckSelect<T, Prisma__UserConnectionsClient<UserConnections>, Prisma__UserConnectionsClient<UserConnectionsGetPayload<T>>>

    /**
     * Delete a UserConnections.
     * @param {UserConnectionsDeleteArgs} args - Arguments to delete one UserConnections.
     * @example
     * // Delete one UserConnections
     * const UserConnections = await prisma.userConnections.delete({
     *   where: {
     *     // ... filter to delete one UserConnections
     *   }
     * })
     * 
    **/
    delete<T extends UserConnectionsDeleteArgs>(
      args: SelectSubset<T, UserConnectionsDeleteArgs>
    ): CheckSelect<T, Prisma__UserConnectionsClient<UserConnections>, Prisma__UserConnectionsClient<UserConnectionsGetPayload<T>>>

    /**
     * Update one UserConnections.
     * @param {UserConnectionsUpdateArgs} args - Arguments to update one UserConnections.
     * @example
     * // Update one UserConnections
     * const userConnections = await prisma.userConnections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserConnectionsUpdateArgs>(
      args: SelectSubset<T, UserConnectionsUpdateArgs>
    ): CheckSelect<T, Prisma__UserConnectionsClient<UserConnections>, Prisma__UserConnectionsClient<UserConnectionsGetPayload<T>>>

    /**
     * Delete zero or more UserConnections.
     * @param {UserConnectionsDeleteManyArgs} args - Arguments to filter UserConnections to delete.
     * @example
     * // Delete a few UserConnections
     * const { count } = await prisma.userConnections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserConnectionsDeleteManyArgs>(
      args?: SelectSubset<T, UserConnectionsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConnectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserConnections
     * const userConnections = await prisma.userConnections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserConnectionsUpdateManyArgs>(
      args: SelectSubset<T, UserConnectionsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserConnections.
     * @param {UserConnectionsUpsertArgs} args - Arguments to update or create a UserConnections.
     * @example
     * // Update or create a UserConnections
     * const userConnections = await prisma.userConnections.upsert({
     *   create: {
     *     // ... data to create a UserConnections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserConnections we want to update
     *   }
     * })
    **/
    upsert<T extends UserConnectionsUpsertArgs>(
      args: SelectSubset<T, UserConnectionsUpsertArgs>
    ): CheckSelect<T, Prisma__UserConnectionsClient<UserConnections>, Prisma__UserConnectionsClient<UserConnectionsGetPayload<T>>>

    /**
     * Find one UserConnections that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserConnectionsFindUniqueOrThrowArgs} args - Arguments to find a UserConnections
     * @example
     * // Get one UserConnections
     * const userConnections = await prisma.userConnections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserConnectionsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserConnectionsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserConnectionsClient<UserConnections>, Prisma__UserConnectionsClient<UserConnectionsGetPayload<T>>>

    /**
     * Find the first UserConnections that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConnectionsFindFirstOrThrowArgs} args - Arguments to find a UserConnections
     * @example
     * // Get one UserConnections
     * const userConnections = await prisma.userConnections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserConnectionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserConnectionsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserConnectionsClient<UserConnections>, Prisma__UserConnectionsClient<UserConnectionsGetPayload<T>>>

    /**
     * Count the number of UserConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConnectionsCountArgs} args - Arguments to filter UserConnections to count.
     * @example
     * // Count the number of UserConnections
     * const count = await prisma.userConnections.count({
     *   where: {
     *     // ... the filter for the UserConnections we want to count
     *   }
     * })
    **/
    count<T extends UserConnectionsCountArgs>(
      args?: Subset<T, UserConnectionsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserConnectionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConnectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserConnectionsAggregateArgs>(args: Subset<T, UserConnectionsAggregateArgs>): PrismaPromise<GetUserConnectionsAggregateType<T>>

    /**
     * Group by UserConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConnectionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserConnectionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserConnectionsGroupByArgs['orderBy'] }
        : { orderBy?: UserConnectionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserConnectionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserConnectionsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserConnections.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserConnectionsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserConnections base type for findUnique actions
   */
  export type UserConnectionsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserConnections
     * 
    **/
    select?: UserConnectionsSelect | null
    /**
     * Filter, which UserConnections to fetch.
     * 
    **/
    where: UserConnectionsWhereUniqueInput
  }

  /**
   * UserConnections: findUnique
   */
  export interface UserConnectionsFindUniqueArgs extends UserConnectionsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserConnections base type for findFirst actions
   */
  export type UserConnectionsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserConnections
     * 
    **/
    select?: UserConnectionsSelect | null
    /**
     * Filter, which UserConnections to fetch.
     * 
    **/
    where?: UserConnectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserConnections to fetch.
     * 
    **/
    orderBy?: Enumerable<UserConnectionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserConnections.
     * 
    **/
    cursor?: UserConnectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserConnections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserConnections.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserConnections.
     * 
    **/
    distinct?: Enumerable<UserConnectionsScalarFieldEnum>
  }

  /**
   * UserConnections: findFirst
   */
  export interface UserConnectionsFindFirstArgs extends UserConnectionsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserConnections findMany
   */
  export type UserConnectionsFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserConnections
     * 
    **/
    select?: UserConnectionsSelect | null
    /**
     * Filter, which UserConnections to fetch.
     * 
    **/
    where?: UserConnectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserConnections to fetch.
     * 
    **/
    orderBy?: Enumerable<UserConnectionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserConnections.
     * 
    **/
    cursor?: UserConnectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserConnections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserConnections.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserConnectionsScalarFieldEnum>
  }


  /**
   * UserConnections create
   */
  export type UserConnectionsCreateArgs = {
    /**
     * Select specific fields to fetch from the UserConnections
     * 
    **/
    select?: UserConnectionsSelect | null
    /**
     * The data needed to create a UserConnections.
     * 
    **/
    data: XOR<UserConnectionsCreateInput, UserConnectionsUncheckedCreateInput>
  }


  /**
   * UserConnections update
   */
  export type UserConnectionsUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserConnections
     * 
    **/
    select?: UserConnectionsSelect | null
    /**
     * The data needed to update a UserConnections.
     * 
    **/
    data: XOR<UserConnectionsUpdateInput, UserConnectionsUncheckedUpdateInput>
    /**
     * Choose, which UserConnections to update.
     * 
    **/
    where: UserConnectionsWhereUniqueInput
  }


  /**
   * UserConnections updateMany
   */
  export type UserConnectionsUpdateManyArgs = {
    /**
     * The data used to update UserConnections.
     * 
    **/
    data: XOR<UserConnectionsUpdateManyMutationInput, UserConnectionsUncheckedUpdateManyInput>
    /**
     * Filter which UserConnections to update
     * 
    **/
    where?: UserConnectionsWhereInput
  }


  /**
   * UserConnections upsert
   */
  export type UserConnectionsUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserConnections
     * 
    **/
    select?: UserConnectionsSelect | null
    /**
     * The filter to search for the UserConnections to update in case it exists.
     * 
    **/
    where: UserConnectionsWhereUniqueInput
    /**
     * In case the UserConnections found by the `where` argument doesn't exist, create a new UserConnections with this data.
     * 
    **/
    create: XOR<UserConnectionsCreateInput, UserConnectionsUncheckedCreateInput>
    /**
     * In case the UserConnections was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserConnectionsUpdateInput, UserConnectionsUncheckedUpdateInput>
  }


  /**
   * UserConnections delete
   */
  export type UserConnectionsDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserConnections
     * 
    **/
    select?: UserConnectionsSelect | null
    /**
     * Filter which UserConnections to delete.
     * 
    **/
    where: UserConnectionsWhereUniqueInput
  }


  /**
   * UserConnections deleteMany
   */
  export type UserConnectionsDeleteManyArgs = {
    /**
     * Filter which UserConnections to delete
     * 
    **/
    where?: UserConnectionsWhereInput
  }


  /**
   * UserConnections: findUniqueOrThrow
   */
  export type UserConnectionsFindUniqueOrThrowArgs = UserConnectionsFindUniqueArgsBase
      

  /**
   * UserConnections: findFirstOrThrow
   */
  export type UserConnectionsFindFirstOrThrowArgs = UserConnectionsFindFirstArgsBase
      

  /**
   * UserConnections without action
   */
  export type UserConnectionsArgs = {
    /**
     * Select specific fields to fetch from the UserConnections
     * 
    **/
    select?: UserConnectionsSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserConnectionsScalarFieldEnum: {
    id: 'id',
    browser: 'browser',
    os: 'os',
    device: 'device',
    country: 'country',
    ip: 'ip'
  };

  export type UserConnectionsScalarFieldEnum = (typeof UserConnectionsScalarFieldEnum)[keyof typeof UserConnectionsScalarFieldEnum]


  export const UserModelScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type UserModelScalarFieldEnum = (typeof UserModelScalarFieldEnum)[keyof typeof UserModelScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserModelWhereInput = {
    AND?: Enumerable<UserModelWhereInput>
    OR?: Enumerable<UserModelWhereInput>
    NOT?: Enumerable<UserModelWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    password?: StringFilter | string
    name?: StringFilter | string
  }

  export type UserModelOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserModelWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserModelOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    _count?: UserModelCountOrderByAggregateInput
    _avg?: UserModelAvgOrderByAggregateInput
    _max?: UserModelMaxOrderByAggregateInput
    _min?: UserModelMinOrderByAggregateInput
    _sum?: UserModelSumOrderByAggregateInput
  }

  export type UserModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserModelScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type UserConnectionsWhereInput = {
    AND?: Enumerable<UserConnectionsWhereInput>
    OR?: Enumerable<UserConnectionsWhereInput>
    NOT?: Enumerable<UserConnectionsWhereInput>
    id?: IntFilter | number
    browser?: StringFilter | string
    os?: StringFilter | string
    device?: StringFilter | string
    country?: StringFilter | string
    ip?: StringFilter | string
  }

  export type UserConnectionsOrderByWithRelationInput = {
    id?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    device?: SortOrder
    country?: SortOrder
    ip?: SortOrder
  }

  export type UserConnectionsWhereUniqueInput = {
    id?: number
  }

  export type UserConnectionsOrderByWithAggregationInput = {
    id?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    device?: SortOrder
    country?: SortOrder
    ip?: SortOrder
    _count?: UserConnectionsCountOrderByAggregateInput
    _avg?: UserConnectionsAvgOrderByAggregateInput
    _max?: UserConnectionsMaxOrderByAggregateInput
    _min?: UserConnectionsMinOrderByAggregateInput
    _sum?: UserConnectionsSumOrderByAggregateInput
  }

  export type UserConnectionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserConnectionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserConnectionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserConnectionsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    browser?: StringWithAggregatesFilter | string
    os?: StringWithAggregatesFilter | string
    device?: StringWithAggregatesFilter | string
    country?: StringWithAggregatesFilter | string
    ip?: StringWithAggregatesFilter | string
  }

  export type UserModelCreateInput = {
    email: string
    password: string
    name: string
  }

  export type UserModelUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
  }

  export type UserModelUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserModelUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserConnectionsCreateInput = {
    browser: string
    os: string
    device: string
    country: string
    ip: string
  }

  export type UserConnectionsUncheckedCreateInput = {
    id?: number
    browser: string
    os: string
    device: string
    country: string
    ip: string
  }

  export type UserConnectionsUpdateInput = {
    browser?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type UserConnectionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    browser?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type UserConnectionsUpdateManyMutationInput = {
    browser?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type UserConnectionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    browser?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type UserModelCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserModelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserModelMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserModelMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserModelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type UserConnectionsCountOrderByAggregateInput = {
    id?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    device?: SortOrder
    country?: SortOrder
    ip?: SortOrder
  }

  export type UserConnectionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserConnectionsMaxOrderByAggregateInput = {
    id?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    device?: SortOrder
    country?: SortOrder
    ip?: SortOrder
  }

  export type UserConnectionsMinOrderByAggregateInput = {
    id?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    device?: SortOrder
    country?: SortOrder
    ip?: SortOrder
  }

  export type UserConnectionsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}