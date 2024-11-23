import {
  integer,
  jsonb,
  numeric,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';

export type ChargepointConfigurationType = {
  key: string;
  value: string | number | boolean;
  accessibility: 'RW' | 'R';
  type: 'string' | 'number' | 'boolean';
  unit: string;
  required: boolean;
  description: string;
};

export const profiles = pgTable('profiles', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: varchar('email', { length: 255 }).notNull(),
  raw_user_meta_data: jsonb('raw_user_meta_data').$type<object>(),
  phone: text('phone'),
  created_at: timestamp('created_at', { withTimezone: true, mode: 'date' })
    .defaultNow()
    .notNull(),
  updated_at: timestamp('updated_at', { withTimezone: true, mode: 'date' })
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const baseFields = {
  created_at: timestamp('created_at', { withTimezone: true, mode: 'date' })
    .defaultNow()
    .notNull(),
  created_by: uuid('created_by')
    .notNull()
    .references(() => profiles.id, { onDelete: 'cascade' }),
  updated_at: timestamp('updated_at', { withTimezone: true, mode: 'date' })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
  updated_by: uuid('updated_by'),
};

export const organizations = pgTable('organizations', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 300 }).notNull(),
  website: text('website'),
  description: text('description'),
  ...baseFields,
});

export const usersOrganizations = pgTable(
  'usersOrganizations',
  {
    user_id: uuid('user_id')
      .notNull()
      .references(() => profiles.id, { onDelete: 'cascade' }),
    organization_id: uuid('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    ...baseFields,
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.user_id, table.organization_id] }),
    };
  },
);

export const chargepoints = pgTable('chargepoints', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 300 }).notNull(),
  description: text('description'),
  type: text('type', { enum: ['AC', 'DC'] }).notNull(),
  capacity: numeric('capacity', { precision: 2 }).notNull(),
  country: text('country'),
  region: text('region'),
  city: text('city'),
  address: text('address'),
  latitude: numeric('latitude', { precision: 200 }),
  longitude: numeric('longitude', { precision: 200 }),
  ocpp_version: text('ocpp_version', { enum: ['1.6', '2.0'] }).notNull(),
  configuration: jsonb('configuration').$type<ChargepointConfigurationType[]>(),
  supported_vehicle_type: text('supported_vehicle_type', {
    enum: ['2', '2+3', '3', '3+4', '4', '>4'],
  }).notNull(),
  organization_id: uuid('organization_id')
    .notNull()
    .references(() => organizations.id, { onDelete: 'cascade' }),
  ...baseFields,
});

export const connectors = pgTable('connectors', {
  id: uuid('id').defaultRandom().primaryKey(),
  ocpp_connector_id: integer('ocpp_connector_id').notNull(),
  type: text('type', {
    enum: ['CCS1', 'CCS2', 'CHADEMO', 'TYPE1', 'TYPE2', 'IEC60309', '3PIN'],
  }).notNull(),
  capacity: numeric('capacity', { precision: 2 }),
  chargepoint_id: uuid('chargepoint_id')
    .notNull()
    .references(() => chargepoints.id, { onDelete: 'cascade' }),
  ...baseFields,
});

export type InsertProfile = typeof profiles.$inferInsert;
export type Profile = typeof profiles.$inferSelect;

export type InsertOrganization = typeof organizations.$inferInsert;
export type Organization = typeof organizations.$inferSelect;

export type InsertChargepoint = typeof chargepoints.$inferInsert;
export type Chargepoint = typeof chargepoints.$inferSelect;

export type InsertConnector = typeof connectors.$inferInsert;
export type Connector = typeof connectors.$inferSelect;

// Define a raw SQL migration script to add foreign key constraints
// Execute this code manually to reference the Supabase auth's default users table
// export const addForeignKeyConstraints = sql`
//         ALTER TABLE organizations
//         ADD CONSTRAINT fk_created_by
//         FOREIGN KEY (created_by)
//         REFERENCES auth.users(id),
//         ADD CONSTRAINT fk_updated_by
//         FOREIGN KEY (updated_by)
//         REFERENCES auth.users(id);

//         ALTER TABLE chargepoints
//         ADD CONSTRAINT fk_created_by
//         FOREIGN KEY (created_by)
//         REFERENCES auth.users(id),
//         ADD CONSTRAINT fk_updated_by
//         FOREIGN KEY (updated_by)
//         REFERENCES auth.users(id);

//         ALTER TABLE connectors
//         ADD CONSTRAINT fk_created_by
//         FOREIGN KEY (created_by)
//         REFERENCES auth.users(id),
//         ADD CONSTRAINT fk_updated_by
//         FOREIGN KEY (updated_by)
//         REFERENCES auth.users(id);

//         ALTER TABLE usersOrganizations
//         ADD CONSTRAINT fk_created_by
//         FOREIGN KEY (created_by)
//         REFERENCES auth.users(id),
//         ADD CONSTRAINT fk_updated_by
//         FOREIGN KEY (updated_by)
//         REFERENCES auth.users(id),
//         ADD CONSTRAINT fk_user_id
//         FOREIGN KEY (user_id)
//         REFERENCES auth.users(id);
//     `;

/**
       * post_text: text("post_text"),
      images: json("images").$type<string[]>(),
      hashtags: json("hashtags").$type<string[]>(),
      institution_id: uuid("institution_id")
        .notNull()
        .references(() => institution.id),
       */
