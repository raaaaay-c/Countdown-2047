"use strict";

import { isCountdownEnded } from "src/2047/utilities/is-countdown-ended";

import Moment from "moment-mini";

describe(
    "isCountdownEnded(duration: Duration): boolean",
    () =>
    {
        executeTest(
            true,
            [
                [0.999, "s"],
                [0, "s"],
                [-1, "s"],
                [-2, "s"],
            ]);

        executeTest(
            false,
            [
                [2, "s"],
                [1, "s"],
            ]);
    });

function executeTest(expected: boolean, testCases: TestCase.isCountdownEnded[]): void
{
    it(
        `should return ${ String(expected) }`,
        () =>
        {
            for (const testCase of testCases)
            {
                expect(isCountdownEnded(Moment.duration(...testCase)))
                    .toBe(expected);
            }
        });
}

namespace TestCase
{
    export type isCountdownEnded = [Moment.DurationInputArg1, Moment.DurationInputArg2?];
}
