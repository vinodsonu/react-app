import React, { Component } from 'react'
import { render } from '@testing-library/react'

import { HelloMessage } from '.'

describe("HelloMessage tests", () => {
    it("should render given message", () => {
        const { getByText, debug } = render(<HelloMessage message={"world"}/>)
        getByText(/world/i);
        debug()
    })

})
