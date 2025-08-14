#!/usr/bin/env python3
"""
Comprehensive Backend API Testing Suite for Portfolio Website
Tests all backend endpoints with various scenarios including success and failure cases.
"""

import requests
import json
import sys
import os
from datetime import datetime
import time

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading backend URL: {e}")
        return None

BASE_URL = get_backend_url()
if not BASE_URL:
    print("ERROR: Could not get backend URL from frontend/.env")
    sys.exit(1)

API_URL = f"{BASE_URL}/api"
print(f"Testing backend API at: {API_URL}")

class BackendTester:
    def __init__(self):
        self.test_results = []
        self.total_tests = 0
        self.passed_tests = 0
        self.failed_tests = 0
        
    def log_test(self, test_name, passed, details=""):
        self.total_tests += 1
        if passed:
            self.passed_tests += 1
            status = "✅ PASS"
        else:
            self.failed_tests += 1
            status = "❌ FAIL"
        
        result = f"{status} - {test_name}"
        if details:
            result += f" | {details}"
        
        self.test_results.append(result)
        print(result)
        
    def test_api_health_check(self):
        """Test GET /api/ endpoint for basic health check"""
        print("\n=== Testing API Health Check ===")
        
        try:
            response = requests.get(f"{API_URL}/", timeout=10)
            
            # Test 1: API responds
            if response.status_code == 200:
                self.log_test("API Health Check - Response", True, f"Status: {response.status_code}")
            else:
                self.log_test("API Health Check - Response", False, f"Status: {response.status_code}")
                return
            
            # Test 2: JSON response format
            try:
                data = response.json()
                self.log_test("API Health Check - JSON Format", True, f"Response: {data}")
            except:
                self.log_test("API Health Check - JSON Format", False, "Invalid JSON response")
                return
            
            # Test 3: Expected message content
            if "message" in data and "Portfolio API is running" in data["message"]:
                self.log_test("API Health Check - Message Content", True, f"Message: {data['message']}")
            else:
                self.log_test("API Health Check - Message Content", False, f"Unexpected message: {data}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("API Health Check - Connection", False, f"Connection error: {str(e)}")
        except Exception as e:
            self.log_test("API Health Check - General", False, f"Error: {str(e)}")
    
    def test_contact_form_valid_data(self):
        """Test POST /api/contact with valid data"""
        print("\n=== Testing Contact Form - Valid Data ===")
        
        valid_data = {
            "name": "John Smith",
            "email": "john.smith@example.com",
            "subject": "Portfolio Inquiry",
            "message": "Hello, I'm interested in your portfolio and would like to discuss potential opportunities."
        }
        
        try:
            response = requests.post(f"{API_URL}/contact", json=valid_data, timeout=10)
            
            # Test 1: Successful submission
            if response.status_code == 200:
                self.log_test("Contact Form - Valid Data Status", True, f"Status: {response.status_code}")
            else:
                self.log_test("Contact Form - Valid Data Status", False, f"Status: {response.status_code}, Response: {response.text}")
                return
            
            # Test 2: Response format
            try:
                data = response.json()
                self.log_test("Contact Form - Valid Data JSON", True, f"Response: {data}")
            except:
                self.log_test("Contact Form - Valid Data JSON", False, "Invalid JSON response")
                return
            
            # Test 3: Success response structure
            if data.get("success") is True and "message" in data:
                self.log_test("Contact Form - Valid Data Structure", True, f"Success: {data['success']}, Message: {data['message']}")
            else:
                self.log_test("Contact Form - Valid Data Structure", False, f"Unexpected structure: {data}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("Contact Form - Valid Data Connection", False, f"Connection error: {str(e)}")
        except Exception as e:
            self.log_test("Contact Form - Valid Data General", False, f"Error: {str(e)}")
    
    def test_contact_form_validation(self):
        """Test POST /api/contact with various invalid inputs"""
        print("\n=== Testing Contact Form - Validation ===")
        
        # Test cases for validation
        test_cases = [
            {
                "name": "Short Name - Too Short",
                "data": {"name": "J", "email": "john@example.com", "subject": "Valid Subject", "message": "Valid message with enough characters"},
                "expected_status": 400,
                "should_fail": True
            },
            {
                "name": "Invalid Email Format",
                "data": {"name": "John Smith", "email": "invalid-email", "subject": "Valid Subject", "message": "Valid message with enough characters"},
                "expected_status": 422,  # FastAPI validation error
                "should_fail": True
            },
            {
                "name": "Subject Too Short",
                "data": {"name": "John Smith", "email": "john@example.com", "subject": "Hi", "message": "Valid message with enough characters"},
                "expected_status": 400,
                "should_fail": True
            },
            {
                "name": "Message Too Short",
                "data": {"name": "John Smith", "email": "john@example.com", "subject": "Valid Subject", "message": "Short"},
                "expected_status": 400,
                "should_fail": True
            },
            {
                "name": "Missing Required Fields",
                "data": {"name": "John Smith"},
                "expected_status": 422,
                "should_fail": True
            },
            {
                "name": "Empty Fields",
                "data": {"name": "", "email": "", "subject": "", "message": ""},
                "expected_status": 422,
                "should_fail": True
            }
        ]
        
        for test_case in test_cases:
            try:
                response = requests.post(f"{API_URL}/contact", json=test_case["data"], timeout=10)
                
                if test_case["should_fail"]:
                    if response.status_code >= 400:
                        self.log_test(f"Validation - {test_case['name']}", True, f"Correctly rejected with status {response.status_code}")
                    else:
                        self.log_test(f"Validation - {test_case['name']}", False, f"Should have failed but got status {response.status_code}")
                else:
                    if response.status_code == 200:
                        self.log_test(f"Validation - {test_case['name']}", True, f"Correctly accepted with status {response.status_code}")
                    else:
                        self.log_test(f"Validation - {test_case['name']}", False, f"Should have succeeded but got status {response.status_code}")
                        
            except requests.exceptions.RequestException as e:
                self.log_test(f"Validation - {test_case['name']}", False, f"Connection error: {str(e)}")
            except Exception as e:
                self.log_test(f"Validation - {test_case['name']}", False, f"Error: {str(e)}")
    
    def test_contact_messages_retrieval(self):
        """Test GET /api/contact endpoint to retrieve stored messages"""
        print("\n=== Testing Contact Messages Retrieval ===")
        
        try:
            response = requests.get(f"{API_URL}/contact", timeout=10)
            
            # Test 1: Endpoint responds
            if response.status_code == 200:
                self.log_test("Contact Messages - Retrieval Status", True, f"Status: {response.status_code}")
            else:
                self.log_test("Contact Messages - Retrieval Status", False, f"Status: {response.status_code}, Response: {response.text}")
                return
            
            # Test 2: JSON response format
            try:
                data = response.json()
                self.log_test("Contact Messages - JSON Format", True, f"Retrieved {len(data)} messages")
            except:
                self.log_test("Contact Messages - JSON Format", False, "Invalid JSON response")
                return
            
            # Test 3: Data structure validation
            if isinstance(data, list):
                self.log_test("Contact Messages - List Format", True, f"Response is list with {len(data)} items")
                
                # Test 4: Message structure validation (if messages exist)
                if len(data) > 0:
                    first_message = data[0]
                    required_fields = ["id", "name", "email", "subject", "message", "created_at"]
                    missing_fields = [field for field in required_fields if field not in first_message]
                    
                    if not missing_fields:
                        self.log_test("Contact Messages - Message Structure", True, f"All required fields present: {required_fields}")
                    else:
                        self.log_test("Contact Messages - Message Structure", False, f"Missing fields: {missing_fields}")
                else:
                    self.log_test("Contact Messages - Message Structure", True, "No messages to validate structure (empty list)")
            else:
                self.log_test("Contact Messages - List Format", False, f"Expected list, got: {type(data)}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("Contact Messages - Retrieval Connection", False, f"Connection error: {str(e)}")
        except Exception as e:
            self.log_test("Contact Messages - Retrieval General", False, f"Error: {str(e)}")
    
    def test_database_integration(self):
        """Test database integration by submitting and retrieving a message"""
        print("\n=== Testing Database Integration ===")
        
        # Create a unique test message
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        test_data = {
            "name": f"Test User {timestamp}",
            "email": f"test_{timestamp}@example.com",
            "subject": f"Test Subject {timestamp}",
            "message": f"This is a test message created at {timestamp} to verify database integration."
        }
        
        try:
            # Step 1: Submit a test message
            submit_response = requests.post(f"{API_URL}/contact", json=test_data, timeout=10)
            
            if submit_response.status_code == 200:
                self.log_test("Database Integration - Message Submission", True, "Test message submitted successfully")
            else:
                self.log_test("Database Integration - Message Submission", False, f"Failed to submit: {submit_response.status_code}")
                return
            
            # Step 2: Wait a moment for database write
            time.sleep(1)
            
            # Step 3: Retrieve messages and verify our test message exists
            retrieve_response = requests.get(f"{API_URL}/contact", timeout=10)
            
            if retrieve_response.status_code == 200:
                messages = retrieve_response.json()
                
                # Look for our test message
                test_message_found = False
                for message in messages:
                    if (message.get("name") == test_data["name"] and 
                        message.get("email") == test_data["email"] and
                        message.get("subject") == test_data["subject"]):
                        test_message_found = True
                        break
                
                if test_message_found:
                    self.log_test("Database Integration - Message Persistence", True, "Test message found in database")
                else:
                    self.log_test("Database Integration - Message Persistence", False, "Test message not found in database")
            else:
                self.log_test("Database Integration - Message Retrieval", False, f"Failed to retrieve: {retrieve_response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("Database Integration - Connection", False, f"Connection error: {str(e)}")
        except Exception as e:
            self.log_test("Database Integration - General", False, f"Error: {str(e)}")
    
    def test_status_endpoints(self):
        """Test status check endpoints"""
        print("\n=== Testing Status Endpoints ===")
        
        try:
            # Test GET /api/status
            get_response = requests.get(f"{API_URL}/status", timeout=10)
            
            if get_response.status_code == 200:
                self.log_test("Status Endpoints - GET Status", True, f"Status: {get_response.status_code}")
                
                try:
                    data = get_response.json()
                    if isinstance(data, list):
                        self.log_test("Status Endpoints - GET Format", True, f"Retrieved {len(data)} status checks")
                    else:
                        self.log_test("Status Endpoints - GET Format", False, f"Expected list, got: {type(data)}")
                except:
                    self.log_test("Status Endpoints - GET JSON", False, "Invalid JSON response")
            else:
                self.log_test("Status Endpoints - GET Status", False, f"Status: {get_response.status_code}")
            
            # Test POST /api/status
            post_data = {"client_name": f"test_client_{datetime.now().strftime('%Y%m%d_%H%M%S')}"}
            post_response = requests.post(f"{API_URL}/status", json=post_data, timeout=10)
            
            if post_response.status_code == 200:
                self.log_test("Status Endpoints - POST Status", True, f"Status: {post_response.status_code}")
                
                try:
                    data = post_response.json()
                    if "id" in data and "client_name" in data and "timestamp" in data:
                        self.log_test("Status Endpoints - POST Structure", True, "Response has required fields")
                    else:
                        self.log_test("Status Endpoints - POST Structure", False, f"Missing fields in response: {data}")
                except:
                    self.log_test("Status Endpoints - POST JSON", False, "Invalid JSON response")
            else:
                self.log_test("Status Endpoints - POST Status", False, f"Status: {post_response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("Status Endpoints - Connection", False, f"Connection error: {str(e)}")
        except Exception as e:
            self.log_test("Status Endpoints - General", False, f"Error: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend API tests"""
        print(f"Starting comprehensive backend API testing at {datetime.now()}")
        print(f"Backend URL: {API_URL}")
        print("=" * 80)
        
        # Run all test suites
        self.test_api_health_check()
        self.test_contact_form_valid_data()
        self.test_contact_form_validation()
        self.test_contact_messages_retrieval()
        self.test_database_integration()
        self.test_status_endpoints()
        
        # Print summary
        print("\n" + "=" * 80)
        print("TEST SUMMARY")
        print("=" * 80)
        print(f"Total Tests: {self.total_tests}")
        print(f"Passed: {self.passed_tests}")
        print(f"Failed: {self.failed_tests}")
        print(f"Success Rate: {(self.passed_tests/self.total_tests*100):.1f}%")
        
        print("\nDETAILED RESULTS:")
        for result in self.test_results:
            print(result)
        
        return self.failed_tests == 0

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    
    if success:
        print("\n🎉 All tests passed!")
        sys.exit(0)
    else:
        print(f"\n⚠️  {tester.failed_tests} test(s) failed!")
        sys.exit(1)