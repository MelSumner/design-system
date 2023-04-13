## Component API

<Doc::ComponentApi as |C|>
  <C.Property @name="...attributes">
    This component supports use of [`...attributes`](https://guides.emberjs.com/release/in-depth-topics/patterns-for-components/#toc_attribute-ordering).
  </C.Property>
</Doc::ComponentApi>

### Contextual Components

#### [A].Header

<Doc::ComponentApi as |C|>
  <C.Property @name="errorCode" @type="string">
    The error code to be displayed.
  </C.Property>
  <C.Property @name="icon" @type="string">
    Adds a leading icon to the title. Accepts any [icon](/icons/library) name.
  </C.Property>
  <C.Property @name="title" @type="string"  />
</Doc::ComponentApi>

#### [A].Body

Supports block invocation for custom use.

<Doc::ComponentApi as |C|>
  <C.Property @name="text" @type="string" />
</Doc::ComponentApi>
  
#### [A].Footer

Yields the [Link::Standalone](../components/link/standalone) component as `Link::Standalone`.

<Doc::ComponentApi as |C|>
  <C.Property @name="hasDivider" @type="boolean" @default="false" @values={{array "true" "false"}}>
    Indicates if there should be a visible divider above the footer.
  </C.Property>
</Doc::ComponentApi>