"use client";

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {  useTransition } from "react";
import { csdSignUpAction } from "@/actions/suppliers";
import { useFormState } from "react-dom";
import { toast } from "sonner";


const initialState = {
	message: "",
};

export default function CSDForm() {

  const [pending, startTransition] = useTransition()

  const [state, formAction] = useFormState(csdSignUpAction,initialState)



	return (
		<Card className="max-w-md mx-auto">
			<CardHeader>
				<CardTitle className="text-2xl font-bold">
					Register Your Business
				</CardTitle>
				<CardDescription>
					Fill out the form below to register your business.
				</CardDescription>
			</CardHeader>
			<form
				action={(formData) => {
					startTransition(async () => {
					const result =	await formAction(formData);
            toast(state.message);
					});

				}}
			>
				<CardContent className="space-y-4">
					<div className="grid gap-2">
						<Label htmlFor="csd-number">CSD Number</Label>
						<Input
							id="csd-number"
							name="csd-number"
							placeholder="Enter your CSD number"
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="business-name">Business Name</Label>
						<Input
							id="business-name"
							name="business-name"
							placeholder="Enter your business name"
						/>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="grid gap-2">
							<Label htmlFor="phone">Phone Number</Label>
							<Input
								id="phone"
								name="phone"
								type="tel"
								placeholder="(123) 456-7890"
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								name="email"
								placeholder="example@business.com"
							/>
						</div>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="owner-name">Owner Name</Label>
						<Input
							id="owner-name"
							name="owner-name"
							placeholder="Enter the owner's name"
						/>
					</div>

				</CardContent>
				<CardFooter>
					<Button
						disabled={pending}
						aria-disabled={pending}
						type="submit"
						className="ml-auto"
					>
						{pending ? "Submitting..." : "Submit"}
					</Button>
				</CardFooter>
			</form>
		</Card>
	);
}
