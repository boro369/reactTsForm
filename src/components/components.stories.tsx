import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./button/Button";

storiesOf("Button", module)
    .add("red",
        () => <Button onclick={() => void 0} />
    )
    // .add("blue",
    //     () => <Button onclick={() => void 0} />
    // );

// storiesOf("InputBox", module)
// storiesOf("InputBox", module)
// storiesOf("InputBox", module)
    // .add("red",
    //     () => <ColorButton color="red" />
    // )
    // .add("blue",
    //     () => <ColorButton color="blue" />
    // )