# Primal

Design and create UI experiences with Inspr's design system language.
Primal was designed to simplify our daily operations when creating websites and apps.

# Packages 📦

## Primitives 🗿
The primitives library is a component library for Nextjs created by the Inspr team!

To use our primitives library, run the following npm command:

```bash
npm i @primal/icons @primal/state @primal/theme @primal/primitives
```

The @primal/icons is responsible for having all the icons .svg related to the project, @primal/state manage the state and the state dependencies of all the components, @primal/theme has all the themes that is already linked to the project or manage the custom themes that can me added and @primal/primitives has all the components that where created.

This package has as peerDepencies the following:
```json
"@emotion/react": "^11.7.1",
"@emotion/styled": "^11.6.0",
"next": "^12.0.8",
"react": "^17.0.2",
"react-dom": "^17.0.2"
```

Since npm does not install them automatically, you can do:
```bash
npm i @emotion/react@11.1.4 @emotion/styled@11.6.0 react react-dom next
```

Or, if you start your Next application with:

```bash
npx create-next-app website --ts
```

Then you can only install emotion after that!

Finally, when you create your Next application you need to tell Next to transpile some of our libraries, since they were done in Typescript! To do that you can install the [Next Transpile Modules](https://www.npmjs.com/package/next-transpile-modules). To that, run the command:

```bash
npm i next-transpile-modules
```

And in your next.config.js add:
```js
const withTM = require("next-transpile-modules")([
    "@primal/state",
    "@primal/theme",
    "@primal/primitives",
])

module.exports = withTM({})
```

After that your project should be able to use our amazing primitives building blocks (hoooray ✨).

### Components 

#### Author Component

If your web page renders awesome articles written by real people, you can definetly use the Author Component to give them a way to showcase themselves!

The code for it is as follows:
```jsx
import { Spacer, Author } from "@inspr/primitives"
import polenta from "../public/polenta.png"

<Author
    size="sm"
    name={{ firstName: "Polenta", lastName: "B." }}
    image={{ src: polenta, alt: "Example Image :)" }}
    userId="polentinha"
    onClick={() => {
        console.log("How awesome!")
    }}
/>
```

#### Avatar Component

The Avatar component is simply for those ones who hate having an amazing image but don't know how to make it turn into a ball-shaped avatar like image. 

The code for it is as follows:
```jsx
import { Avatar } from "@inspr/primitives"
import polenta from "../public/polenta.png"

<Avatar
    src={polenta}
    alt={"Our good doggie, but bigger now."}
    size="xl"
/>
```

#### Breadcrumb Component
Our Breadcrumb component is surprising for its simplicity. The idea of a breadcrumb is to help you navigate back to where you were inside your web app. If you have a page that stays nested inside a very complex routing system, this component might help you out. 

The code for it is as follows:
```jsx
import { Breadcrumbs } from "@inspr/primitives"

<Breadcrumbs url={"/blog/microservices-benefits"} />
<Breadcrumbs home="blog" url={"/blog/microservices-benefits"} />
<Breadcrumbs url={"/blog/super/crazy/long/nested/page/example"} />
<Breadcrumbs
    home="nested"
    url={"/blog/super/crazy/long/nested/page/example"}
/>
```

#### Button Component
I've never seen a website with a button... Said no one ever! We've got you covered on the buttons department, to use our buttons you must have our Theme library installed, this was a decision made to make your life simpler, once our Theme library comes with the powers of variants which will be shown in the code below!

The code for it is as follows:
```jsx
import { Button } from "@inspr/primitives"
    
<Button
    label="Go to INSPR"
    variant="primary"
    iconKind="line"
    iconRight="arrowRight"
    onClick={() => window.location.assign("https://inspr.com")}
/>
```

#### Card Component
Our card component is another one distinguished by it's simplicity. If you want text organized in a card manner, this is it. 

The code for it is as follows:
```jsx
import { Card, Text, Spacer } from "@inspr/primitives"

const newStyle = css`
    border: 5px solid green;
`
<Card shadow="md" width="fit-content" height="fit-content">
    <Text
        size="lg"
        color="umbra"
        weight="bold"
        lineHeight="lg"
        family="opensauce">
        Easy to configure
    </Text>
    <Spacer size="sm" />
    <Text size="md" lineHeight="md">
        Design, connect, and deploy your applications quickly.
    </Text>
</Card>
```

#### Checkbox Component
Our checkbox component is a bit different. For itself it only the little box, onClick it does not mark, (but of course we are going to show you a way to do that). Also it can be used in two ways: alone and in group. 

The code for it is as follows:
```jsx
import { Checkbox } from "@inspr/primitives"

<Checkbox
    variant="error"
    size="lg"
    isActive={true}
    disabled={false}
    onChange={someFunction}>
    Item 1
</Checkbox>
```

#### Grid Component
The grid component organize the pages with a template that has a value for colums and rows, this values define how many sections of the grid will be used by each component, the grid can adjuste acording to the page size(xs, sm, md, lg).

The code for it is as follows:
```jsx
import { Grid, View, Image } from "@inspr/primitives"

<Grid maxColumns={{ repeat: 8, unit: "1fr" }}>
    <Grid.Item
        xs={{
            row: [1, 2],
            column: [1, 9],
        }}
        justify="center">
        {cover && (
            <View
                layout={{
                    width: "100%",
                    height: "550px",
                }}>
                <Image
                    src={cover.url}
                    alt={cover.alternativeText}
                    height={550}
                    width={10000}
                    objectFit="cover"
                />
            </View>
        )}
    </Grid.Item>
    <Grid.Item
        xs={{
            row: [2, 3],
            column: [1, 8],
        }}
        sm={{
            row: [2, 4],
            column: [1, 8],
        }}
        direction="column">
            content
    </Grid.Item>
    <Grid.Item
        xs={{
            row: [3, 4],
            column: [1, 8],
        }}
        sm={{
            row: [4, 5],
            column: [1, 8],
        }}
        direction="column">
        <View layout={{ padding: { right: "24px", left: "24px" } }}>
            {
                markdownProcessor.processSync(content)
                    .result as React.ReactChild
            }
        </View>
    </Grid.Item>
</Grid>
```

#### Icon Component
The Icon component is a component to put simple images on your page. It's usage is quite simple, but the icons are on a different lib (use ``` npm i @primal/icons ```).

The code for it is as follows:
```jsx
import { Icon } from "@inspr/primitives"

    <Icon name="arrowDown" kind="line" />
    <Icon name="arrowUp" kind="solid" size="lg" />
    <Icon name="house" size="xxl" />

```


#### Image Component
The Image component is the main component to use image on your page. It's usage is very easy. 

The code for it is as follows:
```jsx
import { Image } from "@inspr/primitives"

    <Image src={polenta} alt="polenta" width={200} height={250} />

```

#### Link Component
The link component is what you will use to refer a external or internal link when necessary.

The code for it is as follows:
```jsx
import { Link } from "@inspr/primitives"

<link
    rel="stylesheet"
    media="print"
    onLoad="this.onload=null;this.removeAttribute('media');"
    href="https://storage.googleapis.com/inspr-fonts/fonts.css"
/>
```      

#### List Component
The list component is the main way to list things, it can be customized in various ways to fit the necessity and aproach. 

The code for it is as follows:
```jsx
import { List } from "@inspr/primitives"

<List type="ol">
    <ListItem>item 1</ListItem>
    <ListItem size="lg">item 2</ListItem>
    <List>
        <ListItem>item 3</ListItem>
        <ListItem>item 4</ListItem>
    </List>
</List>
```

#### Radio Component
If necessary to do a list where you can select more than one option the radio component offers a radio button that can be customized in a lot of ways to fit any occasion.

The code for it is as follows:
```jsx
import { Radio } from "./radio"

<Radio.Group value={""} direction="column">
    <Radio variant="primary" value="txt1">
        A
    </Radio>
    <Radio variant="success" value="txt3">
        B
    </Radio>
    <Radio variant="error" value="txt4">
        C
    </Radio>
</Radio.Group>
```


#### Separator Component
The separator component can be used to distinguish and separate two sections, it can have various kinds and colors, which change the separator style.

The code for it is as follows:
```jsx
import { Separator } from "@inspr/primitives"

<Separator kind="line" color="orange.400" />
<Separator kind="dashed" color="orange.400" />
```

#### Spacer Component
Like the separator the spacer serves the same purpose but with more customization, like background images.

The code for it is as follows:
```jsx
import { Spacer } from "@inspr/primitives"

<Spacer size="sm" />
<Spacer {...args}></Spacer>
```

#### Stack Component
The stack component organize the page, it has break points to help the page organization depending on the page size(xs, sm, md, lg), the default value of colums we use are 24.

The code for it is as follows:
```jsx
import { Stack, Image, View, Text, Spacer } from "@inspr/primitives"

<Stack layout={{ width: "100%", padding: { bottom: "32px" } }}>
    <Stack.Item xs={24} sm={11} lg={7.5} >
        <View
            layout={{
                position: "relative",
                width: "100%",
                height: "50vmin",
            }}>
            <Image
                alt={alt}
                src={src}
                layout="fill"
                object-fit="contain"
            />
            <Image
                alt={alt}
                src={src}
                layout="fill"
                object-fit="contain"
            />
            <Image
                alt={alt}
                src={src}
                layout="fill"
                object-fit="contain"
            />
        </View>
    </Stack.Item>
    <Stack.Item xs={24} direction="column" justify="center">
        <View>
            <Spacer size="xs" />
            <Text size="xxs" lineHeight="xxs" textAlign="center">
                {alt}
            </Text>
            <Spacer size="xs" />
        </View>
    </Stack.Item>
</Stack>
```

#### Switch Component
The switch component is used in pages that is necessary to toggle from true to false things, very common on coockie's setings, has a plenny of style proprieties to customise and fit in any case senario. 

The code for it is as follows:
```jsx
import { Switch } from "@inspr/primitives"

<Switch
    isActive={st}
    onChange={setSt}
    variant={args.variant}
    size={args.size}
/>
```

#### Text Component
The text component is the main component to storage texts and display it on the page.

The code for it is as follows:
```jsx
import { Text } from "@inspr/primit

<Text size="xxs" lineHeight="xxs" textAlign="center">
    {alt}
</Text>
```

#### View Component
The view component its a space where you can put other components like texts, lists and others, the view can be used in grid, stacks or others scopes.

The code for it is as follows:
```jsx
import { View } from "@inspr/primitives"

<View layout={{ padding: { top: "xxs" } }}>
    {formatDisplayName(
        name.firstName,
        maxLength,
        name.lastName
    )}
</View>
```

## State 🎛

## Icons 😄

## Theme 🖼

Created by Inspr
