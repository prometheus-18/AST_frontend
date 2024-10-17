import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RuleEngineService } from 'src/app/rule-engine-service.service';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent {
  ruleForm: FormGroup;
  ruleResult: boolean | null = null;

  constructor(private fb: FormBuilder,private ruleService:RuleEngineService) {
    // Initialize the form with the required fields
    this.ruleForm = this.fb.group({
      age: [''],
      department: [''],
      salary: [''],
      experience: [''],
    });
  }

  ngOnInit(): void {}

  // Handle form submission and call the API to create a rule
  onSubmit() {
    const ruleData = this.ruleForm.value;

    this.ruleService.createRule(ruleData).subscribe(
      (response) => {
        console.log('Rule created:', response);
      },
      (error) => {
        console.error('Error creating rule:', error);
      }
    );
  }

  // Evaluate rule using the service
  // evaluateRule() {
  //   const ruleData = this.ruleForm.value;

  //   this.ruleService.evaluateRule(ruleData).subscribe(
  //     (response: any) => {
  //       this.ruleResult = response.result; // Display the result of the evaluation
  //     },
  //     (error) => {
  //       console.error('Error evaluating rule:', error);
  //     }
  //   );
  // }
}

