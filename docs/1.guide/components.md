# Components

> Discover the components you can use in your markdown files.

## Alerts

<!-- prettier-ignore-start -->
::tabs
  ::div
  ---
  label: Preview
  icon: i-heroicons-magnifying-glass-circle
  ---
  ::note
  Highlights information that users should take into account, even when skimming.
  ::
  ::tip
  Optional information to help a user be more successful.
  ::
  ::important
  Crucial information necessary for users to succeed.
  ::
  ::warning{to="/"}
  Critical content demanding immediate user attention due to potential risks.
  ::
  ::caution{to="/"}
  Negative potential consequences of an action.
  ::
  ::
  ::div
  ---
  label: Code
  icon: i-heroicons-code-bracket-square
  ---
  ```mdc
  ::note
  Highlights information that users should take into account, even when skimming.
  ::
  ::tip
  Optional information to help a user be more successful.
  ::
  ::important
  Crucial information necessary for users to succeed.
  ::
  ::warning{to="/"}
  Critical content demanding immediate user attention due to potential risks.
  ::
  ::caution{to="/"}
  Negative potential consequences of an action.
  ::
  ```
  ::
::
<!-- prettier-ignore-end -->

## Package Manager

Components to generate cross package manager comments

<!-- prettier-ignore-start -->
::tabs
  ::div
  ---
  label: Preview
  icon: i-heroicons-magnifying-glass-circle
  ---
  :pm-install{name="defu"}

  :pm-run{script="dev"}

  :pm-x{command="giget unjs new-lib"}

  ::
  ::div
  ---
  label: Code
  icon: i-heroicons-code-bracket-square
  ---
  ```mdc
  :pm-install{name="defu"}

  :pm-run{script="dev"}

  :pm-x{command="giget unjs new-lib"}
  ```
  ::
::
<!-- prettier-ignore-end -->

## Read More

The component is used to create a link to another page.

<!-- prettier-ignore-start -->
::tabs
  ::div
  ---
  label: Preview
  icon: i-heroicons-magnifying-glass-circle
  ---
  :read-more{to="/guide"}
  :read-more{to="https://unjs.io" title="UnJS Website"}
  ::
  ::div
  ---
  label: Code
  icon: i-heroicons-code-bracket-square
  ---
  ```mdc
  :read-more{to="/guide"}
  :read-more{to="https://unjs.io" title="UnJS Website"}
  ```
  ::
::
<!-- prettier-ignore-end -->

### Auto Code Groups

This is automatic transformation, if you have code blocks right after each other, they will be grouped together using [`code-group`](https://ui.nuxt.com/pro/prose/code-group).

```md
    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      modules: [],
    })
    ```

    ```vue [app.vue]
    <template>
      <h1>Hello World</h1>
    </template>
    ```
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: [],
})
```

```ts [server/api/hello.get.ts]
export default defineEventHandler(() => {
  return {
    hello: 'world'
  }
})
```

```vue [app.vue]
<template>
  <div>
   <h1>Welcome to the homepage</h1>
  </div>
</template>
```

### Steps

To generate steps all you have to do is use standard markdown numbered lists

> [!IMPORTANT]
> In order to generate this component, you need to have content inside at least one of the lists. The list can't be a child of another component & also any content within a Mardown list will need at least 2 tabs to be considered as a child of the list.

```md
1. Install Package

   ::note
   Please note that steps only work with numbered lists and is not within children.
   ::

   :pm-install{name="undocs"}

2. Run development server

   :pm-run{script="undocs"}

3. Done ✅
```

1. Install Package

   ::note
   Please note that steps only work with numbered lists and is not within children.
   ::

   :pm-install{name="undocs"}

2. Run development server

   :pm-run{script="undocs"}

3. Done ✅

### Github Notes

https://github.com/orgs/community/discussions/16925

```md
> [!NOTE]
> Highlights information that users should take into account, even when skimming.
```

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

```md
> [!TIP]
> Optional information to help a user be more successful.
```

> [!TIP]
> Optional information to help a user be more successful.

```md
> [!IMPORTANT]
> Crucial information necessary for users to succeed.
```

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

```md
> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.
```

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

```md
> [!CAUTION]
> Negative potential consequences of an action.
```

> [!CAUTION]
> Negative potential consequences of an action.

## UI Pro

You can use all the Prose components from [Nuxt UI Pro](https://ui.nuxt.com/pro/components/prose/callout) in your markdown files.

- [Callout](https://ui.nuxt.com/pro/components/prose/callout)
- [Card](https://ui.nuxt.com/pro/components/prose/card)
- [CardGroup](https://ui.nuxt.com/pro/components/prose/card-group)
- [Field](https://ui.nuxt.com/pro/components/prose/field)
- [FieldGroup](https://ui.nuxt.com/pro/components/prose/field-group)
- [Collapsible](https://ui.nuxt.com/pro/components/prose/collapsible)
- [Shortcut](https://ui.nuxt.com/pro/components/prose/shortcut)
- [Tabs](https://ui.nuxt.com/pro/components/prose/tabs)
