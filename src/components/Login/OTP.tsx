import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

const OTP = () => {
    return (
        <InputOTP
            maxLength={6}
            render={({ slots }) => (
                <>
                    <InputOTPGroup>
                        {slots.slice(0, 3).map((slot, index) => (
                            <InputOTPSlot key={index} {...slot} />
                        ))}{" "}
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        {slots.slice(3).map((slot, index) => (
                            <InputOTPSlot key={index + 3} {...slot} />
                        ))}
                    </InputOTPGroup>
                </>
            )}
        />
    )
}

export default OTP
